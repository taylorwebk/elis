import React, { Component } from 'react'
import ButterToast from 'butter-toast'

import Load from '../common/Load'
import MessagePop from '../common/MessagePop'
import HeaderModule from './HeaderModule'

class Modules extends Component {
  componentDidMount() {
    if (this.props.modulesData.length === 0) {
      this.props.fetchModulesJson()
    }
  }
  componentDidUpdate(prevProps) {
    const { message } = this.props
    if (prevProps.modulesData.length !== this.props.modulesData.length) {
      ButterToast.raise({
        content: () => (
          <MessagePop message={message} type="success" />
        ),
        toastTimeout: 2500
      })
    }
  }
  render() {
    const { showSpinner } = this.props
    return (
      <div>
        <ButterToast trayPosition="top-right" />
        {showSpinner ? <Load message="Cargando Modulos..." /> : null}
        <br /><br /><br />
        <HeaderModule />
      </div>
    )
  }
}
export default Modules
