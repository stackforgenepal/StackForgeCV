import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/config/routes'
import LandingPage from '@/pages/LandingPage'
import TemplatesPage from '@/pages/TemplatesPage'
import ResourcesPage from '@/pages/ResourcesPage'
import ResourceArticlePage from '@/pages/ResourceArticlePage'
import EditorPage from '@/pages/EditorPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default createBrowserRouter([
  { path: ROUTES.home, element: <LandingPage /> },
  { path: ROUTES.templates, element: <TemplatesPage /> },
  { path: ROUTES.resources, element: <ResourcesPage /> },
  { path: `${ROUTES.resources}/:slug`, element: <ResourceArticlePage /> },
  { path: ROUTES.editor, element: <EditorPage /> },
  { path: '*', element: <NotFoundPage /> },
])
