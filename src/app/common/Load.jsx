import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

const Load = ({ message }) => (
  <Dimmer>
    <Loader>{message}</Loader>
  </Dimmer>
)
export default Load
