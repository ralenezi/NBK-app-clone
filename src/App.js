import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme/index'

// Routes
import Routes from './routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
