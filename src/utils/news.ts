const YOUTUBE_HOSTNAMES = new Set([
	'youtube.com',
	'www.youtube.com',
	'm.youtube.com',
	'youtu.be',
	'www.youtu.be',
	'youtube-nocookie.com',
	'www.youtube-nocookie.com',
]);

const YOUTUBE_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/;

/**
 * Extracts an 11-character YouTube video ID from standard watch, short, embed,
 * shorts, or live YouTube URLs. Returns null for non-YouTube URLs or invalid IDs.
 */
export function extractYouTubeVideoId(url?: string): string | null {
	const trimmed = url?.trim();
	if (!trimmed) {
		return null;
	}

	let parsed: URL;
	try {
		parsed = new URL(trimmed);
	} catch {
		return null;
	}

	const hostname = parsed.hostname.toLowerCase();
	if (!YOUTUBE_HOSTNAMES.has(hostname)) {
		return null;
	}

	const segments = parsed.pathname.split('/').filter(Boolean);
	let candidate: string | null = null;

	if (hostname === 'youtu.be' || hostname === 'www.youtu.be') {
		candidate = segments[0] ?? null;
	} else if (segments[0] === 'watch') {
		candidate = parsed.searchParams.get('v');
	} else if (segments[0] === 'embed' || segments[0] === 'shorts' || segments[0] === 'live') {
		candidate = segments[1] ?? null;
	}

	if (!candidate || !YOUTUBE_ID_PATTERN.test(candidate)) {
		return null;
	}

	return candidate;
}

/**
 * Returns the YouTube thumbnail URL derived from externalUrl or embedUrl,
 * or null if neither is a valid YouTube video URL.
 */
export function getYouTubeThumbnailUrl(externalUrl?: string, embedUrl?: string): string | null {
	const videoId = extractYouTubeVideoId(externalUrl) ?? extractYouTubeVideoId(embedUrl);
	return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
}

/**
 * Resolves the display thumbnail for a news entry: uses featuredImage when provided,
 * and falls back to the YouTube video thumbnail only when source is 'YouTube'.
 */
export function resolveNewsThumbnail(data: {
	source?: string;
	featuredImage?: string;
	externalUrl?: string;
	embedUrl?: string;
}): string {
	const explicit = data.featuredImage?.trim();
	if (explicit) {
		return explicit;
	}

	if (data.source === 'YouTube') {
		return getYouTubeThumbnailUrl(data.externalUrl, data.embedUrl) ?? '';
	}

	return '';
}
