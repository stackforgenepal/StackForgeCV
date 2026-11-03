import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCv } from '@/context/CvContext'
import { ThemeDropdown } from '@/context/ThemeContext'
import { TEMPLATES } from '@/config/constants'
import { renderCvHtml } from '@/lib/cvRenderer'
import { setPageMeta } from '@/lib/seo'

export default function TemplatesPage() {
  const navigate = useNavigate()
  const { profile, sections, updateSettings } = useCv()

  useEffect(() => {
    document.body.classList.remove('ed')
    window.scrollTo(0, 0)
    setPageMeta({
      title: 'Free CV Templates | Professional CV Designs - StackForge CV',
      description: 'Browse professional CV templates for students, graduates and experienced professionals. Choose a design and customize your CV with StackForge CV.',
      path: '/templates',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Free CV Templates',
        url: 'https://stackforge.cv/templates/'
      }
    })
  }, [])

  const handleSelectTemplate = (templateId, accentColor) => {
    updateSettings({ t: templateId, ac: accentColor })
    navigate('/editor/')
  }

  return (
    <div id="v2" className="view on">
      {/* Top Navigation */}
      <nav className="top site-nav">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="StackForge" className="logo-img" />
        </Link>
        <div>
          <Link to="/resources/">Resources</Link>
          <span className="thslot">
            <ThemeDropdown />
          </span>
          <button
            type="button"
            className="btn g"
            onClick={() => navigate('/')}
          >
            Back
          </button>
        </div>
      </nav>

      {/* Templates Content */}
      <div className="wrap">
        <h1>Free CV Templates for a Professional CV</h1>
        <p>Choose a clean, customizable CV design for your next application. You can switch layouts and accent colors later in the editor. Looking for help with your content? Explore our <Link to="/resources/">CV examples and writing guides</Link>.</p>

        <div id="rows">
          {TEMPLATES.map((tpl) => (
            <div key={tpl.id} className="row">
              <header>
                <h2>{tpl.name}</h2>
                <span>{tpl.desc}</span>
              </header>
              <div className="cards">
                {tpl.accents.map(([accentCode, accentName]) => {
                  const previewHtml = renderCvHtml(tpl.id, profile, sections)
                  return (
                    <button
                      key={accentCode}
                      type="button"
                      className="card"
                      onClick={() => handleSelectTemplate(tpl.id, accentCode)}
                    >
                      <div
                        className="thumb"
                        style={{ '--cac': accentCode }}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: previewHtml }}
                        />
                      </div>
                      <b>
                        {tpl.name} {accentName}
                      </b>
                      <small>Use this template</small>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
