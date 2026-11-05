import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCv } from '@/context/CvContext'
import { ThemeDropdown } from '@/context/ThemeContext'
import { renderCvHtml, applyCvStyles } from '@/lib/cvRenderer'
import { RESOURCE_ARTICLES } from '@/data/resources'
import { setPageMeta } from '@/lib/seo'

const FONT_OPTIONS = [
  'Inter',
  'Poppins',
  'Source Sans 3',
  'Space Grotesk',
  'Lora',
  'Merriweather',
  'Playfair Display'
]

const EXPORT_FORMATS = [
  {
    format: 'PDF',
    name: 'PDF Document',
    description: 'A polished format for sharing, printing and submitting job applications.'
  },
  {
    format: 'DOC',
    name: 'Word Document',
    description: 'An editable document for making further changes outside the editor.'
  },
  {
    format: 'JSON',
    name: 'JSON Data',
    description: 'Export your CV information as structured data.'
  },
  {
    format: 'HTML',
    name: 'HTML File',
    description: 'A web-compatible version of your CV.'
  },
  {
    format: 'JPG',
    name: 'JPG Image',
    description: 'Save your CV as an image for convenient sharing.'
  },
  {
    format: 'PNG',
    name: 'PNG Image',
    description: 'Export a high-quality image version of your CV.'
  },
  {
    format: 'TXT',
    name: 'Plain Text',
    description: 'A simple text version of your CV content.'
  }
]

const FAQ_ITEMS = [
  {
    question: 'Is StackForge CV free to use?',
    answer:
      'Yes. StackForge CV lets you create, customize and export your CV without paying for the standard CV-building features.'
  },
  {
    question: 'Can I create a CV online without signing up?',
    answer:
      'Yes. You can start building your CV without creating an account or going through a registration process.'
  },
  {
    question: 'Which file formats can I export my CV in?',
    answer:
      'You can export your CV in seven formats: PDF, Word, JSON, HTML, JPG, PNG and TXT.'
  },
  {
    question: 'Can I create a multi-page CV?',
    answer:
      'Yes. Your CV can contain more than one page when your education, experience and other details require additional space.'
  },
  {
    question: 'Can I fit my CV onto one page?',
    answer:
      'Yes. Use the Fit to One Page option to adjust your CV so that its content fits on a single page.'
  },
  {
    question: 'Which fonts are available?',
    answer:
      'You can choose from Inter, Poppins, Source Sans 3, Space Grotesk, Lora, Merriweather and Playfair Display.'
  },
  {
    question: 'Can I change the paper size?',
    answer:
      'Yes. You can choose between A4, US Letter and US Legal paper sizes.'
  },
  {
    question: 'Can I customize the appearance of my CV?',
    answer:
      'Yes. You can adjust the font, font size, line spacing, paper size and accent color to customize your CV.'
  },
  {
    question: 'What CV templates are available?',
    answer:
      'StackForge CV offers five templates: Modern, Classic, Minimal, Castor and Solstice. You can browse them on the Templates page.'
  },
  {
    question: 'Does the CV preview update while I am editing?',
    answer:
      'Yes. The editor includes a live preview, so you can see how your CV looks as you enter and customize your information.'
  }
]

export default function LandingPage() {
  const { profile, sections } = useCv()
  const heroSheetRef = useRef(null)

  useEffect(() => {
    document.body.classList.remove('ed')
    window.scrollTo(0, 0)

    setPageMeta({
      title: 'Free Online CV Builder | StackForge CV',
      description:
        'Create a professional CV online for free. Choose from 5 templates, customize fonts and layouts, preview instantly, and export to PDF, Word, JSON, HTML, JPG, PNG or TXT.',
      path: '/',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': 'https://stackforge.cv/#webpage',
            url: 'https://stackforge.cv/',
            name: 'Free Online CV Builder | StackForge CV',
            description:
              'Create, customize and export a professional CV online with StackForge CV.',
            about: {
              '@id': 'https://stackforge.cv/#software'
            }
          },
          {
            '@type': 'SoftwareApplication',
            '@id': 'https://stackforge.cv/#software',
            name: 'StackForge CV',
            url: 'https://stackforge.cv/',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'A free online CV builder with premium templates, live preview, customizable formatting and multiple export formats.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            featureList: [
              'Five CV templates',
              'Live CV preview',
              'Seven export formats: PDF, Word, JSON, HTML, JPG, PNG and TXT',
              'Seven font choices',
              'Adjustable font size and line spacing',
              'A4, US Letter and US Legal paper sizes',
              'Custom accent colors',
              'Fit to one page option',
              'Multi-page CV support'
            ]
          }
        ]
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
    <div id="v1" className="view on home-page">

      {/* Top Navigation Bar — original navigation preserved */}
      <nav className="top site-nav">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="StackForge CV" />
        </Link>

        <div>
          <Link to="/templates/">Templates</Link>
          <a href="#how-it-works">How it works</a>
          <Link to="/resources/">Resources</Link>

          <span className="thslot">
            <ThemeDropdown />
          </span>

          <Link to="/templates/" className="btn g">
            Build a CV
          </Link>
        </div>
      </nav>

      {/* Hero Section — original two-column layout and live CV preserved */}
      <section className="hero">
        <div>
          <h1>Free Online CV Builder – Create a Professional CV</h1>

          <p>
            Create a professional CV online for free with StackForge CV.
            Choose from five premium templates, add your education and
            experience, customize fonts and layouts, and preview your CV
            as you type. Export your finished CV in PDF, Word, JSON, HTML,
            JPG, PNG or TXT format.
          </p>

          <div className="acts">
            <Link to="/templates/" className="btn p">
              Get started building your CV
            </Link>

            <Link to="/templates/" className="btn g">
              Browse templates
            </Link>
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
          <span className="chip a">7 export formats</span>
        </div>
      </section>

      {/* Original Feature Highlights — kept compact */}
      <section className="feat">
        <div>
          <h3>Live preview</h3>
          <span>
            See your CV update as you enter information and customize
            its appearance.
          </span>
        </div>

        <div>
          <h3>Five premium templates</h3>
          <span>
            Choose from Modern, Classic, Minimal, Castor and Solstice
            layouts without retyping your information.
          </span>
        </div>

        <div>
          <h3>Your type, your rules</h3>
          <span>
            Customize fonts, font size, spacing, paper size and accent
            colors to match your preferred style.
          </span>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section home-how" id="how-it-works">
        <div className="home-section-heading">
          <span className="home-eyebrow">SIMPLE CV BUILDING</span>
          <h2>Create Your CV in Three Simple Steps</h2>
          <p>
            Go from a blank page to a finished, professional-looking CV
            without a complicated editing process.
          </p>
        </div>

        <div className="home-how-grid">
          <article className="home-step-card">
            <span className="home-step-number">01</span>
            <div className="home-step-symbol">01</div>
            <h3>Choose a template</h3>
            <p>
              Start with one of five professionally designed CV templates
              that suits your preferred look.
            </p>
          </article>

          <article className="home-step-card">
            <span className="home-step-number">02</span>
            <div className="home-step-symbol">02</div>
            <h3>Add your information</h3>
            <p>
              Enter your personal details, education, experience, skills
              and other relevant information.
            </p>
          </article>

          <article className="home-step-card">
            <span className="home-step-number">03</span>
            <div className="home-step-symbol">03</div>
            <h3>Customize and export</h3>
            <p>
              Adjust the design, check your live preview and export your
              finished CV in your preferred format.
            </p>
          </article>
        </div>
      </section>

      {/* Customization Features */}
      <section className="home-section home-editor">
        <div className="home-section-heading">
          <span className="home-eyebrow">MORE CONTROL OVER YOUR DESIGN</span>
          <h2>Customize Every Detail of Your CV</h2>
          <p>
            A CV should reflect your information and your preferred style.
            Adjust the formatting instead of settling for a fixed design.
          </p>
        </div>

        <div className="home-editor-grid">
          <div className="home-editor-copy">
            <article className="home-editor-feature">
              <span className="home-feature-marker">Aa</span>
              <div>
                <h3>Choose your typography</h3>
                <p>
                  Select from seven fonts, including Inter, Poppins,
                  Source Sans 3, Space Grotesk, Lora, Merriweather
                  and Playfair Display.
                </p>
              </div>
            </article>

            <article className="home-editor-feature">
              <span className="home-feature-marker">13</span>
              <div>
                <h3>Control size and spacing</h3>
                <p>
                  Adjust font size in points and choose Tight, Normal
                  or Relaxed line spacing.
                </p>
              </div>
            </article>

            <article className="home-editor-feature">
              <span className="home-feature-marker">A4</span>
              <div>
                <h3>Select your paper size</h3>
                <p>
                  Choose A4, US Letter or US Legal paper size for
                  your preferred document format.
                </p>
              </div>
            </article>

            <article className="home-editor-feature">
              <span className="home-feature-marker">01</span>
              <div>
                <h3>Make it one page or multiple pages</h3>
                <p>
                  Use Fit to One Page when you need a single-page CV,
                  or let your content continue across multiple pages.
                </p>
              </div>
            </article>

            <article className="home-editor-feature">
              <span className="home-feature-marker">#</span>
              <div>
                <h3>Personalize your accent color</h3>
                <p>
                  Change the accent color to give your CV a more
                  personal and consistent appearance.
                </p>
              </div>
            </article>
          </div>

          {/* Decorative representation of the actual editor controls */}
          <div className="home-control-panel" aria-label="CV customization options">
            <div className="home-control-panel-top">
              <div>
                <span className="home-control-kicker">EDITOR CONTROLS</span>
                <h3>Make it yours.</h3>
              </div>
              <span className="home-live-indicator">
                <span /> Live preview
              </span>
            </div>

            <div className="home-control-group">
              <span className="home-control-label">FONT FAMILY</span>
              <div className="home-font-options">
                {FONT_OPTIONS.map((font) => (
                  <span
                    className={`home-font-option ${font === 'Poppins' ? 'active' : ''}`}
                    key={font}
                  >
                    {font}
                  </span>
                ))}
              </div>
            </div>

            <div className="home-control-group">
              <span className="home-control-label">FONT SIZE</span>
              <div className="home-size-control">
                <span>−</span>
                <strong>13pt</strong>
                <span>+</span>
              </div>
            </div>

            <div className="home-control-group">
              <span className="home-control-label">LINE SPACING</span>
              <div className="home-control-options">
                <span>Tight</span>
                <span className="active">Normal</span>
                <span>Relaxed</span>
              </div>
            </div>

            <div className="home-control-group">
              <span className="home-control-label">PAPER SIZE</span>
              <div className="home-control-options">
                <span className="active">A4</span>
                <span>US Letter</span>
                <span>US Legal</span>
              </div>
            </div>

            <div className="home-control-bottom">
              <div className="home-control-group">
                <span className="home-control-label">ACCENT COLOR</span>
                <div className="home-color-options">
                  <span className="home-color-dot blue" />
                  <span className="home-color-dot violet" />
                  <span className="home-color-dot teal" />
                  <span className="home-color-dot red" />
                  <span className="home-color-dot dark" />
                </div>
              </div>

              <span className="home-fit-option">
                <span className="home-fit-check">✓</span>
                Fit to one page
              </span>
            </div>

            <p className="home-control-note">
              Your changes are reflected in the CV preview while you edit.
            </p>
          </div>
        </div>
      </section>

      {/* Export Formats */}
      <section className="home-section home-exports">
        <div className="home-section-heading">
          <span className="home-eyebrow">YOUR CV, YOUR FORMAT</span>
          <h2>Export Your CV in Seven Different Formats</h2>
          <p>
            Need a document, an image or structured data? Choose the
            export format that works for your next step.
          </p>
        </div>

        <div className="home-export-grid">
          {EXPORT_FORMATS.map((item) => (
            <article className="home-export-card" key={item.format}>
              <div className="home-export-file">
                <span>{item.format}</span>
              </div>

              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="home-export-note">
          One CV. Seven ways to export it.
        </p>
      </section>

      {/* Audience Section */}
      <section className="home-section home-audience">
        <div className="home-section-heading">
          <span className="home-eyebrow">BUILT FOR DIFFERENT CAREER STAGES</span>
          <h2>A CV Builder for Students, Graduates and Professionals</h2>
          <p>
            Whether you are writing your first CV or updating years of
            experience, start with a layout you can make your own.
          </p>
        </div>

        <div className="home-audience-grid">
          <article className="home-audience-card">
            <span className="home-audience-index">01</span>
            <h3>Students</h3>
            <p>
              Organize your education, projects, skills and activities
              into a clear first CV.
            </p>
          </article>

          <article className="home-audience-card">
            <span className="home-audience-index">02</span>
            <h3>Fresh graduates</h3>
            <p>
              Present your academic background, internships and
              transferable skills to employers.
            </p>
          </article>

          <article className="home-audience-card">
            <span className="home-audience-index">03</span>
            <h3>Job seekers</h3>
            <p>
              Prepare a professional CV for your next job application
              and export it in a suitable format.
            </p>
          </article>

          <article className="home-audience-card">
            <span className="home-audience-index">04</span>
            <h3>Working professionals</h3>
            <p>
              Update your experience, achievements and skills with
              a layout that fits your career.
            </p>
          </article>
        </div>
      </section>

      {/* Why StackForge CV */}
      <section className="home-section home-benefits">
        <div className="home-section-heading">
          <span className="home-eyebrow">A SIMPLER WAY TO BUILD A CV</span>
          <h2>Why Choose StackForge CV?</h2>
          <p>
            Everything you need to create and customize your CV,
            without an unnecessarily complicated workflow.
          </p>
        </div>

        <div className="home-benefits-grid">
          <article className="home-benefit">
            <span className="home-benefit-check">✓</span>
            <div>
              <h3>Free to use</h3>
              <p>Build and export your CV without a paid subscription.</p>
            </div>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-check">✓</span>
            <div>
              <h3>No registration process</h3>
              <p>Get started without creating an account.</p>
            </div>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-check">✓</span>
            <div>
              <h3>See changes instantly</h3>
              <p>Use the live preview to check your CV as you edit.</p>
            </div>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-check">✓</span>
            <div>
              <h3>Flexible formatting</h3>
              <p>Adjust typography, spacing, paper size and colors.</p>
            </div>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-check">✓</span>
            <div>
              <h3>Seven export formats</h3>
              <p>Choose PDF, Word, JSON, HTML, JPG, PNG or TXT.</p>
            </div>
          </article>

          <article className="home-benefit">
            <span className="home-benefit-check">✓</span>
            <div>
              <h3>One-page and multi-page CVs</h3>
              <p>Choose a compact one-page layout or use multiple pages.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Existing Useful CV Resources — preserved */}
      <section
        className="home-resources"
        aria-labelledby="home-resources-title"
      >
        <div className="home-resources-heading">
          <div>
            <span className="resource-eyebrow">STACKFORGE CV RESOURCES</span>
            <h2 id="home-resources-title">
              Make your CV stronger with practical examples and guides.
            </h2>
          </div>

          <Link to="/resources/" className="resource-card-link">
            Explore all resources <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="home-resource-grid">
          {RESOURCE_ARTICLES.slice(0, 3).map((article) => (
            <article className="resource-card" key={article.slug}>
              <div className="resource-card-top">
                <span className="resource-tag">{article.category}</span>
                <span className="resource-read-time">{article.readTime}</span>
              </div>

              <h3>
                <Link to={`/resources/${article.slug}/`}>
                  {article.shortTitle}
                </Link>
              </h3>

              <p>{article.description}</p>

              <Link
                className="resource-card-link"
                to={`/resources/${article.slug}/`}
              >
                Read guide <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="home-section home-faq">
        <div className="home-section-heading">
          <span className="home-eyebrow">GOT QUESTIONS?</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers about creating, customizing and exporting
            your CV with StackForge CV.
          </p>
        </div>

        <div className="home-faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <details className="home-faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="home-faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>

              <div className="home-faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="home-final-cta">
        <div className="home-final-cta-content">
          <span className="home-eyebrow">YOUR NEXT STEP STARTS HERE</span>
          <h2>Your Next Opportunity Starts With a Better CV.</h2>
          <p>
            Create your CV, make it yours and export it in the format
            you need. Start building with StackForge CV.
          </p>

          <Link to="/templates/" className="home-final-cta-button">
            Start building your CV <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Existing Footer — preserved */}
      <footer className="resource-footer home-resource-footer">
        <Link to="/" className="resource-footer-brand">
          StackForge CV
        </Link>

        <span>Free online CV builder and practical CV resources.</span>

        <div>
          <Link to="/templates/">Templates</Link>
          <Link to="/resources/">Resources</Link>
        </div>
      </footer>
    </div>
  )
}