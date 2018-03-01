import React from 'react'
import { Card } from 'semantic-ui-react'

const colors = ['', 'orange', 'green', 'red', 'teal']
const ModuleCard = ({ module }) => (
  <Card color={colors[module.id]}>
    <Card.Content>
      <Card.Header>
        <span style={{ color: colors[module.id] }}>
          {module.nombre}
        </span>
      </Card.Header>
      <Card.Description>
        { module.dsc }
        <div>
          <b>Día: </b>
          { module.dia }
        </div>
        <div>
          <b>De: </b>
          { module.ini }
        </div>
        <div>
          <b>A: </b>
          { module.fin }
        </div>
      </Card.Description>
    </Card.Content>
  </Card>
)
export default ModuleCard
