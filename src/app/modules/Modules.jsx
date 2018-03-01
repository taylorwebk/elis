import React, { Component } from 'react'
import ButterToast from 'butter-toast'
import { Card } from 'semantic-ui-react'

import Load from '../common/Load'
import MessagePop from '../common/MessagePop'
import HeaderModule from './HeaderModule'
import ModuleCard from './ModuleCard'

class Modules extends Component {
  componentDidMount() {
    if (this.props.modulesData.length === 0) {
      this.props.fetchModulesJson()
    }
  }
  componentDidUpdate(prevProps) {
    const { message, modulesData } = this.props
    if (prevProps.modulesData.length !== modulesData.length) {
      ButterToast.raise({
        content: () => (
          <MessagePop message={message} type="success" />
        ),
        toastTimeout: 2500
      })
    }
  }
  render() {
    const { showSpinner, modulesData } = this.props
    let content = null
    if (modulesData.length > 0) {
      content = modulesData.map(module => (
        <ModuleCard key={module.id} module={module} />
      ))
    }
    return (
      <div>
        <ButterToast trayPosition="top-right" />
        {showSpinner ? <Load message="Cargando Modulos..." /> : null}
        <br /><br /><br />
        <HeaderModule />
        <Card.Group centered>
          {content}
        </Card.Group>
      </div>
    )
  }
}
export default Modules
