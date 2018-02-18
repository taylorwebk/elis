import React from 'react'
import { Table, Icon, Container, Button } from 'semantic-ui-react'
import { openNewTab, baseip } from '../../utils'

const handleClick = (idmodule, idstudent) => {
  openNewTab(`${baseip}reporte/${idmodule}/${idstudent}`)
}

const TableCont = ({ module, filter }) => {
  const students = Object.keys(module.estudiantes).filter((key) => {
    const student = module.estudiantes[key]
    if (
      student.nombres.indexOf(filter) >= 0 ||
      student.apellidos.indexOf(filter) >= 0 ||
      student.correo.indexOf(filter) >= 0 ||
      filter.length === 0
    ) {
      return true
    }
    return false
  }).map(key => (module.estudiantes[key]))
  if (students.length === 0) {
    return null
  }
  const contenido = students.map(student => (
    <Table.Row key={student.id} verticalAlign="top">
      <Table.Cell>
        &nbsp;&nbsp;&nbsp;
        <Button animated="fade" basic onClick={() => { handleClick(module.id, student.id) }}>
          <Button.Content hidden><strong>Imprimir</strong></Button.Content>
          <Button.Content visible>
            <Icon name="print" />
          </Button.Content>
        </Button>
        { `${student.apellidos} ${student.nombres}` }
      </Table.Cell>
      <Table.Cell collapsing>{ student.correo }</Table.Cell>
      <Table.Cell collapsing>{ student.cel }</Table.Cell>
    </Table.Row>
  ))
  const header = {
    1: {
      icon: 'html5',
      color: 'orange'
    },
    2: {
      icon: 'android',
      color: 'green'
    },
    3: {
      icon: 'code',
      color: 'red'
    },
    4: {
      icon: 'asterisk',
      color: 'teal'
    }
  }
  return (
    <Container textAlign="right">
      <br />
      <Table basic="very" celled color="green">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Icon name={header[module.id].icon} color={header[module.id].color} size="big" />
              <span style={{ color: header[module.id].color }}>
                {module.nombre}
              </span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Nombres
            </Table.HeaderCell>
            <Table.HeaderCell>
              Correo
            </Table.HeaderCell>
            <Table.HeaderCell>
              Celular
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contenido}
        </Table.Body>
      </Table>
      <br />
    </Container>
  )
}
export default TableCont
