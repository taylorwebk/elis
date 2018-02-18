import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

const Home = () => (
  <Container textAlign="center">
    <br /><br /><br />
    <Header as="h1" color="blue" icon>
      <Icon color="grey" name="student" />
      <Header.Subheader>
        Bienvenido a:
      </Header.Subheader>
      Elis
      <br /><br />
      <Header.Subheader>
        Desde ac&aacute; podr&aacute;s administrar a los estudiantes de FullStack
      </Header.Subheader>
    </Header>
  </Container>
)
export default Home
