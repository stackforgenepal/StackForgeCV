import React, { useEffect } from 'react'
import { useCv } from '@/context/CvContext'
import EditorHeader from '@/components/layout/EditorHeader'
import Toolbar from '@/features/editor/Toolbar'
import FormPanel from '@/features/editor/FormPanel'
import PreviewPane from '@/features/preview/PreviewPane'
import ChangeTemplateModal from '@/components/modal/ChangeTemplateModal'
import Toast from '@/components/common/Toast'
import { setPageMeta } from '@/lib/seo'

export default function EditorPage() {
  const { mobileTab } = useCv()

  useEffect(() => {
    setPageMeta({
      title: 'CV Editor | StackForge CV',
      description: 'Edit and customize your CV with StackForge CV.',
      path: '/editor',
      robots: 'noindex, nofollow'
    })
    document.body.classList.add('ed')
    return () => {
      document.body.classList.remove('ed')
    }
  }, [])

  return (
    <div id="v3" className="view on ed-container">
      {/* Editor Header */}
      <EditorHeader />

      {/* Toolbar */}
      <Toolbar />

      {/* Split Pane */}
      <div className={`split ${mobileTab === 'preview' ? 'pv' : ''}`} id="split">
        <FormPanel />
        <PreviewPane />
      </div>

      {/* Change Template Modal */}
      <ChangeTemplateModal />

      {/* Toast Notification */}
      <Toast />
    </div>
  )
}
