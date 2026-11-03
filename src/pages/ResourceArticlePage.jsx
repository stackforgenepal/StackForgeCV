import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ResourceNav from '@/components/layout/ResourceNav'
import { getResourceBySlug } from '@/data/resources'
import { setPageMeta } from '@/lib/seo'
import NotFoundPage from '@/pages/NotFoundPage'

function ArticleSection({ section, index }) {
  return (
    <section className="resource-article-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))}
      {section.bullets?.length > 0 && (
        <ul>
          {section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}
        </ul>
      )}
      {section.example && (
        <div className="resource-example">
          <span>{section.example.label}</span>
          <p>{section.example.text}</p>
        </div>
      )}
    </section>
  )
}

export default function ResourceArticlePage() {
  const { slug } = useParams()
  const article = getResourceBySlug(slug)
  const relatedArticles = article
    ? article.related.map((relatedSlug) => getResourceBySlug(relatedSlug)).filter(Boolean)
    : []

  useEffect(() => {
    document.body.classList.remove('ed')
    window.scrollTo(0, 0)

    if (!article) return

    const articleUrl = `https://stackforge.cv/resources/${article.slug}/`
    setPageMeta({
      title: `${article.title} | StackForge CV`,
      description: article.description,
      path: `/resources/${article.slug}`,
      type: 'article',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        mainEntityOfPage: articleUrl,
        publisher: {
          '@type': 'Organization',
          name: 'StackForge CV',
          url: 'https://stackforge.cv/'
        }
      }
    })
  }, [article])

  if (!article) return <NotFoundPage />

  const groupLabel = article.group === 'examples' ? 'CV examples' : 'CV writing guides'

  return (
    <div className="view on resource-view">
      <ResourceNav />

      <main className="resource-shell resource-reading-layout">
        <div className="resource-breadcrumbs">
          <Link to="/resources/">Resources</Link>
          <span aria-hidden="true">/</span>
          <span>{groupLabel}</span>
        </div>

        <article className="resource-article">
          <header className="resource-article-header">
            <span className="resource-tag">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="resource-article-intro">{article.intro}</p>
            <div className="resource-article-meta">
              <span>StackForge CV</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="resource-article-body">
            {article.sections.map((section, index) => (
              <ArticleSection key={section.heading} section={section} index={index} />
            ))}
          </div>

          <section className="resource-article-cta">
            <div>
              <span className="resource-eyebrow">CREATE YOUR DOCUMENT</span>
              <h2>Ready to build your CV?</h2>
              <p>Choose a template, add your details and customize the layout in StackForge CV.</p>
            </div>
            <Link to="/templates/" className="btn p">Start building</Link>
          </section>
        </article>

        {relatedArticles.length > 0 && (
          <aside className="resource-related" aria-labelledby="related-title">
            <h2 id="related-title">Related resources</h2>
            <div className="resource-related-list">
              {relatedArticles.map((related) => (
                <Link key={related.slug} to={`/resources/${related.slug}/`}>
                  <span>{related.category}</span>
                  <strong>{related.shortTitle}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <Link className="resource-all-link" to="/resources/">Browse all resources</Link>
          </aside>
        )}
      </main>

      <footer className="resource-footer">
        <Link to="/" className="resource-footer-brand">StackForge CV</Link>
        <span>Free online CV builder and practical CV resources.</span>
        <div>
          <Link to="/templates/">Templates</Link>
          <Link to="/resources/">Resources</Link>
        </div>
      </footer>
    </div>
  )
}
