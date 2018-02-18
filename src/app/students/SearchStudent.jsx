import React from 'react'
import { Popup, Container, Input, Button } from 'semantic-ui-react'
import { openNewTab, baseip } from '../../utils'

const handleClick = () => {
  openNewTab(`${baseip}reporte`)
}
const SearchStudent = ({ filter, changeFilter }) => (
  <Container textAlign="right">
    <br />
    <br />
    <Button color="blue" onClick={handleClick}>
      IMPRIMIR TODO
    </Button>&nbsp;&nbsp;
    <Popup
      trigger={
        <Input value={filter} onChange={changeFilter} icon="search" placeholder="Buscar..." />
      }
      header="Búsqueda:"
      content="Puedes buscar estudiantes por nombres, apellidos o correo"
      on="focus"
      hideOnScroll
    />
  </Container>
)

export default SearchStudent
