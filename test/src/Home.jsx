import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Song from "./Song"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Song/>
  </StrictMode>
)
