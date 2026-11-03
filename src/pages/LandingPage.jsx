import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCv } from '@/context/CvContext'
import { ThemeDropdown } from '@/context/ThemeContext'
import { renderCvHtml, applyCvStyles } from '@/lib/cvRenderer'
import { RESOURCE_ARTICLES } from '@/data/resources'
import { setPageMeta } from '@/lib/seo'

export default function LandingPage() {
  const { profile, sections } = useCv()
  const heroSheetRef = useRef(null)

  useEffect(() => {
    document.body.classList.remove('ed')
    window.scrollTo(0, 0)
    setPageMeta({
      title: 'Free Online CV Builder & Resume Maker | StackForge CV',
      description: 'Create a professional CV online for free with StackForge CV. Choose a CV template, customize your layout, preview your document and export it.',
      path: '/',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Free Online CV Builder',
        url: 'https://stackforge.cv/',
        description: 'Create, customize and export a professional CV online with StackForge CV.'
      }
    })
  }, [])

  useEffect(() => {
    if (heroSheetRef.current) {
      const cvNode = heroSheetRef.current.firstChild
      if (cvNode) {
        applyCvStyles(cvNode, {
          size: 'a4',
          ff: "'Poppins'",
          fs: 13,
          lh: 1.5,
          ac: '#2f4bff'
        })
      }
    }
  }, [profile, sections])

  const heroCvHtml = renderCvHtml('m', profile, sections)

  return (
    <div id="v1" className="view on">
      {/* Top Navigation Bar */}
      <nav className="top site-nav">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="StackForge" />
        </Link>
        <div>
          <Link to="/templates/">Templates</Link>
          <a href="#how-it-works">How it works</a>
          <Link to="/resources/">Resources</Link>
          <span className="thslot">
            <ThemeDropdown />
          </span>
          <Link to="/templates/" className="btn g">Build a CV</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>Free Online CV Builder – Create a Professional CV</h1>
          <p>
            Create a professional CV online for free with StackForge CV. Choose a
            template, add your education and experience, customize fonts and colors,
            and preview your document as you type. Export your finished CV when it is ready.
          </p>
          <div className="acts">
            <Link to="/templates/" className="btn p">Get started building your CV</Link>
            <Link to="/templates/" className="btn g">Browse templates</Link>
          </div>
        </div>

        {/* Hero Interactive Stage */}
        <div className="stage">
          <div
            className="sheet"
            id="heroCv"
            ref={heroSheetRef}
            dangerouslySetInnerHTML={{ __html: heroCvHtml }}
          />
          <span className="chip b">Font: Poppins · 13pt</span>
          <span className="chip a">PDF + Word export</span>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="feat" id="how-it-works">
        <div>
          <h3>Live preview</h3>
          <span>
            The right half of the screen always shows your CV, updated on every keystroke.
          </span>
        </div>
        <div>
          <h3>Five layouts</h3>
          <span>
            Modern, Classic, Minimal, Castor and Solstice, each in several accent colors,
            switchable at any time without retyping.
          </span>
        </div>
        <div>
          <h3>Your type, your rules</h3>
          <span>
            Choose a typeface, size, line spacing and accent color from the toolbar above
            the preview.
          </span>
        </div>
      </section>

      {/* Useful CV resources */}
      <section className="home-resources" aria-labelledby="home-resources-title">
        <div className="home-resources-heading">
          <div>
            <span className="resource-eyebrow">STACKFORGE CV RESOURCES</span>
            <h2 id="home-resources-title">Make your CV stronger with practical examples and guides.</h2>
          </div>
          <Link to="/resources/" className="resource-card-link">Explore all resources <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-resource-grid">
          {RESOURCE_ARTICLES.slice(0, 3).map((article) => (
            <article className="resource-card" key={article.slug}>
              <div className="resource-card-top">
                <span className="resource-tag">{article.category}</span>
                <span className="resource-read-time">{article.readTime}</span>
              </div>
              <h3><Link to={`/resources/${article.slug}/`}>{article.shortTitle}</Link></h3>
              <p>{article.description}</p>
              <Link className="resource-card-link" to={`/resources/${article.slug}/`}>Read guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="resource-footer home-resource-footer">
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
