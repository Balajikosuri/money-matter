import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import Home from './components/Home'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={Home} />
        {/* <ProtectedRoute exact path="/products" component={Products} /> */}
        {/* <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} /> */}
        {/* <ProtectedRoute exact path="/cart" component={Cart} /> */}
        {/* <Route path="/not-found" component={NotFound} /> */}
        <Redirect to="not-found" />
      </Switch>
    </div>
  </div>
)

export default App
