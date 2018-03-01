import React, { Component } from 'react'
import { Modal, Button, Input, Form, Radio, Checkbox } from 'semantic-ui-react'

class FormModal extends Component {
  constructor() {
    super()
    this.state = {
      nombres: '',
      apellidos: '',
      correo: '',
      edad: 0,
      univ: '',
      cel: 0,
      sexo: 'F',
      modulos: []
    }
  }
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
  }
  handleModules = (e, { value }) => {
    const { modulos } = this.state
    if (modulos.indexOf(value) >= 0) {
      const newModules = modulos.filter(modulo => (modulo !== value))
      this.setState({
        modulos: newModules
      })
    } else {
      this.setState(prevState => ({
        modulos: [...prevState.modulos, value]
      }))
    }
  }
  sendData = () => {
    this.props.sendStudent(this.state)
    this.props.closeForm()
  }
  render() {
    const { open, closeForm } = this.props
    const {
      nombres, apellidos, correo, edad, univ, cel, sexo, modulos
    } = this.state
    return (
      <Modal open={open} size="tiny" onClose={closeForm}>
        <Modal.Header>
          Inscribir Estudiante
        </Modal.Header>
        <Modal.Content>
          <Input fluid label="Nombres:" name="nombres" value={nombres} onChange={this.handleChange} />
          <br />
          <Input fluid label="Apellidos:" name="apellidos" value={apellidos} onChange={this.handleChange} />
          <br />
          <Input fluid label="Correo:" name="correo" value={correo} onChange={this.handleChange} />
          <br />
          <Input fluid label="Edad:" name="edad" value={edad} onChange={this.handleChange} />
          <br />
          <Input fluid label="Celular:" name="cel" value={cel} onChange={this.handleChange} />
          <br />
          <Input fluid label="Universidad:" name="univ" value={univ} onChange={this.handleChange} />
          <Form.Group inline>
            <span><b>Sexo:&nbsp;&nbsp;</b></span>
            <Form.Field control={Radio} label="Masculino" value="M" name="sexo" checked={sexo === 'M'} onChange={this.handleChange} />
            <Form.Field control={Radio} label="Femenino" value="F" name="sexo" checked={sexo === 'F'} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <span><b>M&oacute;dulos:&nbsp;&nbsp;</b></span>
            <Form.Field>
              <Checkbox
                toggle
                label="HTML 5"
                name="modulos"
                value="1"
                checked={modulos.indexOf('1') >= 0}
                onChange={this.handleModules}
              />
            </Form.Field><br />
            <Form.Field>
              <Checkbox
                toggle
                label="Android"
                name="modulos"
                value="2"
                checked={modulos.indexOf('2') >= 0}
                onChange={this.handleModules}
              />
            </Form.Field><br />
            <Form.Field>
              <Checkbox
                toggle
                label="Laravel"
                name="modulos"
                value="3"
                checked={modulos.indexOf('3') >= 0}
                onChange={this.handleModules}
              />
            </Form.Field><br />
            <Form.Field>
              <Checkbox
                toggle
                label="React JS"
                name="modulos"
                value="4"
                checked={modulos.indexOf('4') >= 0}
                onChange={this.handleModules}
              />
            </Form.Field>
          </Form.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={closeForm}>Cancelar</Button>
          <Button positive onClick={this.sendData}>Registrar</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default FormModal
