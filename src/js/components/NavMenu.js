import React from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'
import history from '../utils/history'
import '../../styles/Navmenu.css'

import Homepage from '../pages/Homepage'
import Cart from '../pages/Cart'

export default function NavMenu() {
  return (
    <Router history={history}>
      <nav>
        <h2>Order It</h2>
        <ul className="links-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  )
}
