import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import CreateComment from './components/projects/CreateComment'
import Profile from './components/dashboard/Profile'
import commentDetails from './components/projects/commentDetails'
import CreateConfirm from './components/projects/CreateConfirm';
import Reqboard from './components/dashboard/Reqboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/comment/:id'component={CreateComment} />
            <Route path='/profile'component={Profile} />
            <Route path='/user/:id/:idT'component={commentDetails} />
            <Route path='/confirm/:id/:idT'component={CreateConfirm} />
            <Route exact path='/request'component={Reqboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;