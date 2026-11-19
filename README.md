# Northline Engineering

A static Astro website with Sveltia CMS for managing project, service, discipline, and news content. Astro renders the website from local Markdown content collections; Sveltia CMS edits those same files in a browser.

## Run locally

```sh
pnpm dev
pnpm build
pnpm preview
```

### Open Sveltia CMS

1. Start the Astro development server with `pnpm dev`.
2. In Google Chrome, Microsoft Edge, or another Chromium-based browser, open `http://localhost:4321/admin/index.html`.
3. Choose **Work with Local Repository**, then select this project’s root folder (the folder containing `.git`).
4. Edit or create entries, then save. Sveltia writes the changed Markdown and uploaded media into this local project.
5. Review the changes with `git status` / `git diff` and commit them with Git when ready.

This workspace has a local Git repository initialized and no remote configured. Sveltia’s local workflow requires Git and Chromium’s File System Access API; it does not work in Safari or Firefox. No GitHub sign-in, OAuth application, proxy, or remote repository is configured. The CMS configuration contains a placeholder GitHub repository identifier only because Sveltia requires a supported backend definition; use **Work with Local Repository**, not either sign-in option. See the [official local workflow guide](https://sveltiacms.app/en/docs/workflows/local) and [Astro integration guide](https://sveltiacms.app/en/docs/frameworks/astro).

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Company introduction, featured services and projects |
| `/about/` | Company story, mission, vision, values, and capabilities |
| `/services/` | Service summaries and Markdown descriptions |
| `/projects/` | Portfolio with category filters |
| `/projects/[slug]/` | Static project detail pages generated from project entries |
| `/contact/` | Contact details and a mailto-based contact form |

## Content architecture

- `src/content.config.ts` defines four build-time collections with schemas from `astro/zod` and Astro’s `glob()` loader.
- `src/content/projects/`, `src/content/services/`, and `src/content/partners/` contain the migrated site content as Markdown with YAML frontmatter. `src/content/news/` is ready for future news; its initial article is an unpublished example draft.
- `src/pages/` queries collections with `getCollection()`. Project details use `getStaticPaths()` and `render()` to build a page per project slug and render its Markdown body.
- `public/admin/index.html` loads Sveltia CMS from its official CDN. `public/admin/config.yml` defines the matching CMS collections and fields.
- CMS uploads go to `public/uploads/` and are referenced by `/uploads/...` paths. Existing Unsplash URLs remain unchanged. The schema accepts both URL forms; public-folder uploads are served as-is rather than transformed by Astro.
- The `partners` collection holds the existing engineering-discipline labels. Optional logo, website, and description fields are available without inventing vendor partnerships.

Sveltia saves changes to the selected local repository; it does not publish or push them. You must review and commit changes yourself. Content changes are not considered published until your site is rebuilt and deployed.

The contact form opens the visitor’s default email application and does not submit data to a server. Replace the sample `.example` contact details, project copy, and Unsplash imagery before publishing.

## Files to study first

1. `src/content.config.ts` — collection loaders and validation schemas.
2. `public/admin/config.yml` — editor collections, fields, and upload paths.
3. `src/content/projects/precision-assembly-line.md` — an entry’s frontmatter and Markdown body.
4. `src/pages/projects/[slug].astro` — collection querying, static paths, and Markdown rendering.
5. `src/pages/projects/index.astro` and `src/pages/services.astro` — collection-driven listings.
6. `src/components/ProjectCard.astro` and `src/components/ServiceCard.astro` — typed collection entry props and reusable UI.
