import GlobalStyle from 'helpers/theme/global'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import App from './app'

if (module.hot) {
  module.hot.accept()
}

render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
