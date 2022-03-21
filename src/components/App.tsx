import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import { Container } from '@mui/material'

import reducer from '../reducer'
import UserInputsTable from './UserInputsTable'
import UserInputForm from './UserInputForm'

/* eslint-disable @typescript-eslint/no-explicit-any */

const persistedState = localStorage.getItem('UserInputs') 
                       ? JSON.parse(localStorage.getItem('UserInputs')!)
                       : undefined
const store = createStore(
  reducer,
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
const replace = () => {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const nextReducer = require('../reducer')
  store.replaceReducer(nextReducer)
}

store.subscribe(()=> {
  localStorage.setItem('UserInputs', JSON.stringify(store.getState()))
})

if (module.hot) {
  module.hot.accept('../reducer', replace)
}

const App = () => (
  <Provider store={store}>
    <Container>
      <UserInputForm/>
      <UserInputsTable/>
    </Container>
  </Provider>
)

export default hot(module)(App)
