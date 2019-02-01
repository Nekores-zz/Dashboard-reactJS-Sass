import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'

// Router
import { ConnectedRouter } from 'connected-react-router'

// Store
import { store, history } from './store'

// i18
import { IntlProvider } from 'react-intl'
import { language, messages } from './lang'

// View
import Wrapper from './views/Wrapper'

// Service Worker
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <IntlProvider locale={language} messages={messages[language]}>
        <Wrapper />
      </IntlProvider>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.register()