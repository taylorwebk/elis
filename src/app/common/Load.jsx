import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

const Load = ({ message }) => (
  <Dimmer active page>
    <Loader size="big" active>{message}</Loader>
  </Dimmer>
)
export default Load
