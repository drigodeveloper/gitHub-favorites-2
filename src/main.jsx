import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css"
import { Routes } from './routes/index'
import GlobalStyle from './styles/global.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
)
