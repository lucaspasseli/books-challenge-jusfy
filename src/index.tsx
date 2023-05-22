import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'

import theme from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import client from './api/client'
import Navigation from './navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <QueryClientProvider client={client}>
          <Navigation />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
