import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import NavBar from './containers/NavBar'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/signin" exact component={SignIn} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App