import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'
import Homepage from './pages/Homepage'

import reducer from './reducer'
import StateProvider from './StateProvider'
import DispatchProvider from './DispatchProvider'
import Cart from './pages/Cart'

function App() {

  const [cart] = React.useState([])

  const [state, dispatch] = React.useReducer(reducer, cart)

  return (
    <Router history={history}>
      <Switch>
        <StateProvider.Provider value={state}>
          <DispatchProvider.Provider value={dispatch}>
            <Route exact path="/" component={Homepage} />
            <Route path="/cart" component={Cart} />
          </DispatchProvider.Provider>
        </StateProvider.Provider>
      </Switch>
    </Router>
  )
}

export default App
