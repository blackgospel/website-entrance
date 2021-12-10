import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import 'assets/fonts/index.css'
import muiTheme from 'helpers/theme/muiTheme'
import theme from 'helpers/theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </StyledThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  )
}

export default App
