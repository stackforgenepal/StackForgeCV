import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResourceNav from '@/components/layout/ResourceNav'
import { getResourcesByGroup } from '@/data/resources'
import { setPageMeta } from '@/lib/seo'

function ResourceCard({ article }) {
  return (
    <article className="resource-card">
      <div className="resource-card-top">
        <span className="resource-tag">{article.category}</span>
        <span className="resource-read-time">{article.readTime}</span>
      </div>
      <h3>
        <Link to={`/resources/${article.slug}/`}>{article.shortTitle}</Link>
      </h3>
      <p>{article.description}</p>
      <Link className="resource-card-link" to={`/resources/${article.slug}/`}>
        Read guide <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default function ResourcesPage() {
  const examples = getResourcesByGroup('examples')
  const guides = getResourcesByGroup('guides')

  useEffect(() => {
    document.body.classList.remove('ed')
    window.scrollTo(0, 0)
    setPageMeta({
      title: 'CV Examples & CV Writing Guides | StackForge CV',
      description: 'Explore practical student, software engineer and academic CV examples, plus step-by-step guides to writing a clear, professional CV.',
      path: '/resources',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'CV Examples and CV Writing Guides',
        description: 'Practical CV examples and guides from StackForge CV.',
        url: 'https://stackforge.cv/resources/'
      }
    })
  }, [])

  return (
    <div className="view on resource-view">
      <ResourceNav />

      <main className="resource-shell">
        <header className="resource-hero">
          <span className="resource-eyebrow">STACKFORGE CV RESOURCES</span>
          <h1>Build a stronger CV, one section at a time.</h1>
          <p>
            Practical CV examples and straightforward writing guides for students,
            fresh graduates and professionals. Learn how to present your experience,
            then use StackForge CV to create and export your document.
          </p>
          <div className="resource-hero-actions">
            <Link to="/templates/" className="btn p">Create your CV</Link>
            <a href="#cv-examples" className="btn g">Explore examples</a>
          </div>
        </header>

        <section className="resource-section" id="cv-examples" aria-labelledby="resource-examples-title">
          <div className="resource-section-heading">
            <div>
              <span className="resource-eyebrow">START WITH AN EXAMPLE</span>
              <h2 id="resource-examples-title">CV examples</h2>
            </div>
            <p>See how to organize your education, skills, projects and experience for different career paths.</p>
          </div>
          <div className="resource-grid">
            {examples.map((article) => <ResourceCard key={article.slug} article={article} />)}
          </div>
        </section>

        <section className="resource-section" id="cv-writing-guides" aria-labelledby="resource-guides-title">
          <div className="resource-section-heading">
            <div>
              <span className="resource-eyebrow">WRITE WITH CONFIDENCE</span>
              <h2 id="resource-guides-title">CV writing guides</h2>
            </div>
            <p>Work through the important parts of a CV, from your opening summary to project descriptions.</p>
          </div>
          <div className="resource-grid">
            {guides.map((article) => <ResourceCard key={article.slug} article={article} />)}
          </div>
        </section>

        <section className="resource-bottom-cta">
          <div>
            <span className="resource-eyebrow">READY TO PUT IT TOGETHER?</span>
            <h2>Turn your information into a professional CV.</h2>
            <p>Choose a layout, enter your details and preview your CV as you edit.</p>
          </div>
          <Link to="/templates/" className="btn p">Choose a CV template</Link>
        </section>
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
