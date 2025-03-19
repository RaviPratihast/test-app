import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </StrictMode>,
)
