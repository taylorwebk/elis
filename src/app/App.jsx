import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Grid,
  Sticky
} from 'semantic-ui-react'

import SideMenu from './common/SideMenu'
import Home from './home/Home'
import StudentCont from './students/StudentCont'
import ModulesCont from './modules/ModulesCont'

class App extends Component {
  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { contextRef } = this.state
    return (
      <Router>
        <div ref={this.handleContextRef}>
          <Grid stackable centered container>
            <Grid.Column computer={3}>
              <br />
              <Sticky context={contextRef}>
                <SideMenu />
              </Sticky>
            </Grid.Column>
            <Grid.Column computer={10} tablet={13}>
              <Route exact path="/" component={Home} />
              <Route path="/estudiantes" component={StudentCont} />
              <Route path="/modulos" component={ModulesCont} />
              <Route path="/instructores" component={Home} />
            </Grid.Column>
            <Grid.Column only="computer" computer={3} />
          </Grid>
        </div>
      </Router>
    )
  }
}

export default App
