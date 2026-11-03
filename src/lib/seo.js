const SITE_URL = 'https://stackforge.cv'

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function setPageMeta({
  title,
  description,
  path = '/',
  type = 'website',
  robots = 'index, follow',
  structuredData
}) {
  if (typeof document === 'undefined') return

  const normalizedPath = path === '/' ? '/' : `/${path.split('/').filter(Boolean).join('/')}/`
  const canonicalUrl = `${SITE_URL}${normalizedPath}`
  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('name', 'robots', robots)
  upsertMeta('property', 'og:type', type)
  upsertMeta('property', 'og:site_name', 'StackForge CV')
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', canonicalUrl)
  upsertMeta('name', 'twitter:card', 'summary')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)

  let schema = document.getElementById('page-structured-data')
  if (structuredData) {
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'page-structured-data'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify(structuredData)
  } else if (schema) {
    schema.remove()
  }
}

export { SITE_URL }
