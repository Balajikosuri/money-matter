import {Switch, Route, Redirect} from 'react-router-dom'

// import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import DashBoard from './components/DashBoard'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={DashBoard} />
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
