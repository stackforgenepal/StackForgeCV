# StackForge CV resources section

The resource area is part of the existing React/Vite application and reuses its theme variables, typography, buttons, navigation and border styles.

## Routes created

- `/resources/` — resource hub
- `/resources/student-cv-example/`
- `/resources/software-engineer-cv-example/`
- `/resources/academic-cv-example/`
- `/resources/how-to-write-a-cv/`
- `/resources/cv-with-no-experience/`
- `/resources/write-cv-summary/`
- `/resources/describe-projects-on-cv/`
- `/resources/cv-vs-resume/`

The homepage and templates page also link to the resource hub and relevant guides.

## Where to edit resource content

All resource copy is kept in one data file:

`src/data/resources.js`

Each article is an object with:

- `slug`: URL segment; keep it lowercase and use hyphens.
- `title`: full article heading and SEO title base.
- `shortTitle`: compact card label.
- `category`: visible category label.
- `group`: either `examples` or `guides`.
- `description`: search snippet and card summary.
- `intro`: opening paragraph on the article page.
- `readTime`: estimated reading time.
- `sections`: article body with headings, paragraphs, bullets and optional examples.
- `related`: slugs of other articles to link to.

To add an article, add one new object to `RESOURCE_ARTICLES`. Use a unique slug and make sure every slug listed in `related` exists. The resources hub automatically places the article in the correct group based on `group`.

## How page rendering works

`src/pages/ResourcesPage.jsx` renders the resource index. `src/pages/ResourceArticlePage.jsx` renders individual articles from the data file. `src/app/router.jsx` maps `/resources/:slug` to the article page.

`src/lib/seo.js` updates the title, description, canonical URL, robots directive and social metadata during client-side navigation.

The important SEO step is `scripts/prerender-pages.js`. After Vite creates `dist/`, this script creates real HTML files for the homepage, templates page, resource index, each resource article and the noindex editor route. This means the text and page metadata are present in the HTML response before the browser runs React.

The build command in `package.json` runs both steps:

```bash
npm run build
```

Do not deploy only the Vite output before the prerender step. The generated nested `index.html` files are needed for direct URLs and search crawlers.

## When you add or remove an article

1. Edit `src/data/resources.js`.
2. Add its public URL to `public/sitemap.xml` (or remove the old URL when an article is retired).
3. Check related article slugs.
4. Run `npm run build`.
5. Confirm that a file exists at `dist/resources/<slug>/index.html`.
6. Deploy the complete `dist/` directory.
7. Check the live URL and submit the sitemap in Google Search Console.

The canonical URL format uses a trailing slash, for example:

`https://stackforge.cv/resources/student-cv-example/`

## Important publishing notes

- The CV builder must remain genuinely free before the site advertises a free application.
- Only publish claims and export formats that the product currently supports.
- Replace bracketed example text with clearly labeled placeholders; do not present sample experience as real candidate history.
- Review each article for originality and usefulness before publishing. The resource pages should help readers, not repeat keywords unnaturally.
- `/editor/` is deliberately marked `noindex, nofollow`; it is an application workspace rather than a search landing page.
