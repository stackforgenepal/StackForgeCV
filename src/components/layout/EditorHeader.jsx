import React from 'react';
import { Link } from 'react-router-dom';
import { useCv } from '@/context/CvContext';
import { ThemeDropdown } from '@/context/ThemeContext';
import Icon from '@/components/common/Icon';
import ExportDropdown from '@/components/common/ExportDropdown';
import { PS } from '@/config/constants'

export default function EditorHeader() {
  const {
    settings,
    setZoom,
    currentTemplateObj, 
    setIsTemplateModalOpen,
  } = useCv()

  const handleZoomOut = () => {
    setZoom((z) => +(z - 0.1).toFixed(2))
  }

  const handleZoomIn = () => {
    setZoom((z) => +(z + 0.1).toFixed(2))
  }

  const handleResetZoom = () => {
    const rightEl = document.getElementById('right')
    if (rightEl) {
      const availableWidth = rightEl.clientWidth - 52
      const paperWidth = PS[settings.size || 'a4']?.[0] || 794
      const nextZoom = availableWidth > 0
        ? Math.min(1, Math.max(0.4, +(availableWidth / paperWidth).toFixed(2)))
        : 1
      setZoom(nextZoom)
    } else {
      setZoom(1)
    }
  }

  return (
    <header className="hd" id="hd">
      {/* Left: Brand & Live indicator */}
      <div className="l">
        <Link to="/" className="brand" aria-label="StackForge CV home">
          <img src="/logo.png" alt="StackForge" className="brand-logo" />
        </Link>
        <span className="live sm">Live</span>
      </div>

      {/* Middle: Template picker trigger */}
      <div className="md">
        <button
          type="button"
          className="ddt"
          id="tOpen"
          aria-haspopup="dialog"
          onClick={() => setIsTemplateModalOpen(true)}
        >
          <Icon name="pen" size={14} />
          <b>Template</b>
          <span className="tag" id="tTag">
            {currentTemplateObj?.name || 'Modern Tech'}
          </span>
        </button>
      </div>

      {/* Right: Zoom controls, Github, Export, Theme */}
      <div className="rt">
        <div className="zc lg">
          <button
            type="button"
            id="zm"
            title="Zoom out"
            aria-label="Zoom out"
            onClick={handleZoomOut}
          >
            <Icon name="zo" size={15} />
          </button>
          <output id="zo">{Math.round((settings.z || 1) * 100)}%</output>
          <button
            type="button"
            id="zp"
            title="Zoom in"
            aria-label="Zoom in"
            onClick={handleZoomIn}
          >
            <Icon name="zi" size={15} />
          </button>
          <i />
          <button
            type="button"
            id="zr"
            title="Reset view"
            aria-label="Reset view"
            onClick={handleResetZoom}
          >
            <Icon name="rot" size={15} />
          </button>
        </div>

        <a
          className="oss sm"
          href="https://github.com/stackforgenepal/StackForgeCV.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="code" size={15} />
          <span style={{ font: 'inherit', background: 'none', padding: 0 }}>
            Open Source
          </span>
          <span>1.4k ★</span>
        </a>

        <ExportDropdown />

        <ThemeDropdown />
      </div>
    </header>
  )
}
