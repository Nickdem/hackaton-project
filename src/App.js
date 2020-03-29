import React from 'react'
import Home from './pages/Home'
import Regional from './pages/Regional'
import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/regional-project/:id" component={Regional} />
      </Switch>
    </>
  )
}

export default App
