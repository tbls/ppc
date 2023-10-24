
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './routes/AppRouter'
import { store } from './store/store'

import './App.css'

export const App = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <AppRouter />
         </BrowserRouter>
      </Provider>
   )
}