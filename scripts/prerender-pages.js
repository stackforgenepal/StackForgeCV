import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { RESOURCE_ARTICLES } from '../src/data/resources.js'
import { TEMPLATES } from '../src/config/constants.js'

const SITE_URL = 'https://stackforge.cv'
const DIST = path.resolve('dist')
const baseHtml = await readFile(path.join(DIST, 'index.html'), 'utf8')

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character])
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function renderNav() {
  return `
    <nav class="top site-nav" aria-label="Main navigation">
      <a class="logo" href="/"><img src="/logo.png" alt="" />StackForge CV</a>
      <div>
        <a href="/">Home</a>
        <a href="/templates/">Templates</a>
        <a href="/resources/">Resources</a>
        <a class="btn p" href="/templates/">Build a CV</a>
      </div>
    </nav>`
}

function renderFooter() {
  return `
    <footer class="resource-footer">
      <a href="/" class="resource-footer-brand">StackForge CV</a>
      <span>Free online CV builder and practical CV resources.</span>
      <div><a href="/templates/">Templates</a><a href="/resources/">Resources</a></div>
    </footer>`
}

function renderCard(article) {
  return `
    <article class="resource-card">
      <div class="resource-card-top">
        <span class="resource-tag">${escapeHtml(article.category)}</span>
        <span class="resource-read-time">${escapeHtml(article.readTime)}</span>
      </div>
      <h3><a href="/resources/${escapeHtml(article.slug)}/">${escapeHtml(article.shortTitle)}</a></h3>
      <p>${escapeHtml(article.description)}</p>
      <a class="resource-card-link" href="/resources/${escapeHtml(article.slug)}/">Read guide <span aria-hidden="true">→</span></a>
    </article>`
}

function renderResourceCollection() {
  const examples = RESOURCE_ARTICLES.filter((article) => article.group === 'examples')
  const guides = RESOURCE_ARTICLES.filter((article) => article.group === 'guides')

  return `${renderNav()}
    <main class="resource-shell">
      <header class="resource-hero">
        <span class="resource-eyebrow">STACKFORGE CV RESOURCES</span>
        <h1>Build a stronger CV, one section at a time.</h1>
        <p>Practical CV examples and straightforward writing guides for students, fresh graduates and professionals. Learn how to present your experience, then use StackForge CV to create and export your document.</p>
        <div class="resource-hero-actions">
          <a href="/templates/" class="btn p">Create your CV</a>
          <a href="#cv-examples" class="btn g">Explore examples</a>
        </div>
      </header>
      <section class="resource-section" id="cv-examples">
        <div class="resource-section-heading"><div><span class="resource-eyebrow">START WITH AN EXAMPLE</span><h2>CV examples</h2></div><p>See how to organize your education, skills, projects and experience for different career paths.</p></div>
        <div class="resource-grid">${examples.map(renderCard).join('')}</div>
      </section>
      <section class="resource-section" id="cv-writing-guides">
        <div class="resource-section-heading"><div><span class="resource-eyebrow">WRITE WITH CONFIDENCE</span><h2>CV writing guides</h2></div><p>Work through the important parts of a CV, from your opening summary to project descriptions.</p></div>
        <div class="resource-grid">${guides.map(renderCard).join('')}</div>
      </section>
      <section class="resource-bottom-cta"><div><span class="resource-eyebrow">READY TO PUT IT TOGETHER?</span><h2>Turn your information into a professional CV.</h2><p>Choose a layout, enter your details and preview your CV as you edit.</p></div><a href="/templates/" class="btn p">Choose a CV template</a></section>
    </main>${renderFooter()}`
}

function renderArticleSection(section) {
  const paragraphs = (section.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')
  const bullets = section.bullets?.length
    ? `<ul>${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>`
    : ''
  const example = section.example
    ? `<div class="resource-example"><span>${escapeHtml(section.example.label)}</span><p>${escapeHtml(section.example.text)}</p></div>`
    : ''
  return `<section class="resource-article-section"><h2>${escapeHtml(section.heading)}</h2>${paragraphs}${bullets}${example}</section>`
}

function renderArticle(article) {
  const related = article.related
    .map((slug) => RESOURCE_ARTICLES.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => `<a href="/resources/${escapeHtml(item.slug)}/"><span>${escapeHtml(item.category)}</span><strong>${escapeHtml(item.shortTitle)}</strong><span aria-hidden="true">→</span></a>`)
    .join('')

  const groupLabel = article.group === 'examples' ? 'CV examples' : 'CV writing guides'
  return `${renderNav()}
    <main class="resource-shell resource-reading-layout">
      <div class="resource-breadcrumbs"><a href="/resources/">Resources</a><span aria-hidden="true">/</span><span>${groupLabel}</span></div>
      <article class="resource-article">
        <header class="resource-article-header">
          <span class="resource-tag">${escapeHtml(article.category)}</span>
          <h1>${escapeHtml(article.title)}</h1>
          <p class="resource-article-intro">${escapeHtml(article.intro)}</p>
          <div class="resource-article-meta"><span>StackForge CV</span><span aria-hidden="true">·</span><span>${escapeHtml(article.readTime)}</span></div>
        </header>
        <div class="resource-article-body">${article.sections.map(renderArticleSection).join('')}</div>
        <section class="resource-article-cta"><div><span class="resource-eyebrow">CREATE YOUR DOCUMENT</span><h2>Ready to build your CV?</h2><p>Choose a template, add your details and customize the layout in StackForge CV.</p></div><a href="/templates/" class="btn p">Start building</a></section>
      </article>
      <aside class="resource-related"><h2>Related resources</h2><div class="resource-related-list">${related}</div><a class="resource-all-link" href="/resources/">Browse all resources</a></aside>
    </main>${renderFooter()}`
}

function renderHome() {
  return `${renderNav()}
    <main>
      <section class="hero">
        <div>
          <h1>Free Online CV Builder – Create a Professional CV</h1>
          <p>Create a professional CV online for free with StackForge CV. Choose a template, add your education and experience, customize fonts and colors, and preview your document as you type. Export your finished CV when it is ready.</p>
          <div class="acts"><a class="btn p" href="/templates/">Get started building your CV</a><a class="btn g" href="/templates/">Browse templates</a></div>
        </div>
        <div class="stage"><div class="sheet" aria-hidden="true"><div style="padding:36px;color:#101a30"><h2 style="font-size:24px">Your Name</h2><p>Professional title</p><hr/><h3>Profile</h3><p>Write a concise introduction about your experience, education and skills.</p><h3>Experience</h3><p>Describe relevant work, projects and achievements.</p><h3>Education</h3><p>List your qualifications and institutions.</p><h3>Skills</h3><p>Include relevant skills and tools.</p></div></div><span class="chip b">Live CV preview</span><span class="chip a">CV export tools</span></div>
      </section>
      <section class="feat" id="how-it-works"><div><h3>Live preview</h3><span>See your CV update as you edit your information.</span></div><div><h3>Five layouts</h3><span>Choose from Modern, Classic, Minimal, Castor and Solstice layouts.</span></div><div><h3>Customize your design</h3><span>Adjust typeface, size, line spacing and accent color.</span></div></section>
      <section class="home-resources"><div class="home-resources-heading"><div><span class="resource-eyebrow">STACKFORGE CV RESOURCES</span><h2>Make your CV stronger with practical examples and guides.</h2></div><a class="resource-card-link" href="/resources/">Explore all resources →</a></div><div class="home-resource-grid">${RESOURCE_ARTICLES.slice(0, 3).map(renderCard).join('')}</div></section>
    </main>${renderFooter()}`
}

function renderTemplates() {
  const cards = TEMPLATES.map((template) => `
    <section class="row">
      <header><h2>${escapeHtml(template.name)}</h2><span>${escapeHtml(template.desc)}</span></header>
      <p>Choose this layout in the StackForge CV editor and customize its accent color.</p>
    </section>`).join('')
  return `${renderNav()}<main class="wrap"><h1>Free CV Templates for a Professional CV</h1><p>Choose a clean, customizable CV design for your next application. You can switch layouts and accent colors later in the editor. Explore our <a href="/resources/">CV examples and writing guides</a> for help with your content.</p>${cards}<p><a class="btn p" href="/editor/">Open the CV editor</a></p></main>${renderFooter()}`
}

function setMeta(html, attribute, key, replacement) {
  const regex = new RegExp(`<meta\\s+${attribute}=["']${key}["'][^>]*>`, 'i')
  return regex.test(html) ? html.replace(regex, replacement) : html.replace('</head>', `  ${replacement}\n</head>`)
}

function createPageHtml({ title, description, path: routePath, content, robots = 'index, follow', schema }) {
  const canonical = `${SITE_URL}${routePath}`
  let html = baseHtml.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  html = setMeta(html, 'name', 'description', `<meta name="description" content="${escapeHtml(description)}" />`)
  html = setMeta(html, 'name', 'robots', `<meta name="robots" content="${escapeHtml(robots)}" />`)
  html = setMeta(html, 'property', 'og:type', `<meta property="og:type" content="${routePath.startsWith('/resources/') && routePath !== '/resources/' ? 'article' : 'website'}" />`)
  html = setMeta(html, 'property', 'og:site_name', '<meta property="og:site_name" content="StackForge CV" />')
  html = setMeta(html, 'property', 'og:title', `<meta property="og:title" content="${escapeHtml(title)}" />`)
  html = setMeta(html, 'property', 'og:description', `<meta property="og:description" content="${escapeHtml(description)}" />`)
  html = setMeta(html, 'property', 'og:url', `<meta property="og:url" content="${canonical}" />`)
  html = setMeta(html, 'name', 'twitter:title', `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
  html = setMeta(html, 'name', 'twitter:description', `<meta name="twitter:description" content="${escapeHtml(description)}" />`)

  const canonicalTag = `<link rel="canonical" href="${canonical}" />`
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalTag)
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`)
  }

  if (schema) {
    html = html.replace('</head>', `  <script type="application/ld+json" id="page-structured-data">${safeJson(schema)}</script>\n</head>`)
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
  return html
}

async function writeRoute(routePath, options) {
  const directory = routePath === '/' ? DIST : path.join(DIST, routePath.replace(/^\/+|\/+$/g, ''))
  await mkdir(directory, { recursive: true })
  await writeFile(path.join(directory, 'index.html'), createPageHtml({ ...options, path: routePath }), 'utf8')
}

await writeRoute('/', {
  title: 'Free Online CV Builder & Resume Maker | StackForge CV',
  description: 'Create a professional CV online for free with StackForge CV. Choose a CV template, customize your layout, preview your document and export it.',
  content: renderHome(),
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Free Online CV Builder',
    url: `${SITE_URL}/`,
    description: 'Create, customize and export a professional CV online with StackForge CV.'
  }
})

await writeRoute('/templates/', {
  title: 'Free CV Templates | Professional CV Designs - StackForge CV',
  description: 'Browse professional CV templates for students, graduates and experienced professionals. Choose a design and customize your CV with StackForge CV.',
  content: renderTemplates(),
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free CV Templates',
    url: `${SITE_URL}/templates/`
  }
})

await writeRoute('/resources/', {
  title: 'CV Examples & CV Writing Guides | StackForge CV',
  description: 'Explore practical student, software engineer and academic CV examples, plus step-by-step guides to writing a clear, professional CV.',
  content: renderResourceCollection(),
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'CV Examples and CV Writing Guides',
    description: 'Practical CV examples and guides from StackForge CV.',
    url: `${SITE_URL}/resources/`
  }
})

for (const article of RESOURCE_ARTICLES) {
  const articlePath = `/resources/${article.slug}/`
  await writeRoute(articlePath, {
    title: `${article.title} | StackForge CV`,
    description: article.description,
    content: renderArticle(article),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      mainEntityOfPage: `${SITE_URL}${articlePath}`,
      publisher: {
        '@type': 'Organization',
        name: 'StackForge CV',
        url: `${SITE_URL}/`
      }
    }
  })
}

await writeRoute('/editor/', {
  title: 'CV Editor | StackForge CV',
  description: 'Edit and customize your CV with StackForge CV.',
  robots: 'noindex, nofollow',
  content: `${renderNav()}<main class="wrap"><h1>CV Editor</h1><p>Open StackForge CV to edit your document.</p><a class="btn p" href="/templates/">Choose a CV template</a></main>${renderFooter()}`
})

console.log(`Prerendered homepage, templates, resources and ${RESOURCE_ARTICLES.length} resource articles.`)
