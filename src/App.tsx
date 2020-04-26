import React from 'react'
import Home from './pages/Home'
import Regional from './pages/Regional'
import {Route, Switch, Redirect} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/regional-project/:id" component={Regional} />
        <Redirect from="/:id" to="/" />
      </Switch>
    </>
  )
}

export default App
