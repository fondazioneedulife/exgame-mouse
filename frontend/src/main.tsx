import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Content from './Content'
import Questions from './Questions'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Content />
    <Questions />
  </StrictMode>,
)
