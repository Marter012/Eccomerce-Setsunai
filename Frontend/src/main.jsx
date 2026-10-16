import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './Styles/GlobalStyles.js'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(
 <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
