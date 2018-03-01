import React, { Component, Fragment } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

const colors = ['red', 'orange', 'green', 'blue']
const rgbcolors = ['#B03060', '#FE9A76', '#016936', '#0E6EB8']
class SideMenu extends Component {
  constructor(args) {
    super(args)
    this.state = {
      activeItem: 'Home',
      colorIndex: 0
    }
  }
  handleItemClick = (e, { name }) => {
    if (this.state.activeItem !== name) {
      this.setState(prevState => ({
        activeItem: name,
        colorIndex: (prevState.colorIndex + 1) % 4
      }))
    }
  }
  render() {
    const { activeItem, colorIndex } = this.state
    const colorStyle = {
      color: rgbcolors[colorIndex],
      pointerEvents: 'none'
    }
    const linkStyle = {
      color: 'black'
    }
    return (
      <Fragment>
        <br />
        <Image src={logo} />
        <br />
        <Menu pointing secondary vertical color={colors[colorIndex]}>
          <Menu.Item
            as="div"
            active={activeItem === 'Home'}
            name="Home"
            onClick={this.handleItemClick}
          >
            <Link to="/" style={activeItem === 'Home' ? colorStyle : linkStyle}>
              Inicio
            </Link>
          </Menu.Item>
          <Menu.Item
            as="div"
            name="Estudiantes"
            active={activeItem === 'Estudiantes'}
            onClick={this.handleItemClick}
          >
            <Link to="/estudiantes" style={activeItem === 'Estudiantes' ? colorStyle : linkStyle}>
              Estudiantes
            </Link>
          </Menu.Item>
          <Menu.Item
            as="div"
            name="Modulos"
            active={activeItem === 'Modulos'}
            onClick={this.handleItemClick}
          >
            <Link to="/modulos" style={activeItem === 'Modulos' ? colorStyle : linkStyle}>
              M&oacute;dulos
            </Link>
          </Menu.Item>
          <Menu.Item
            as="div"
            name="Instructores"
            active={activeItem === 'Instructores'}
            onClick={this.handleItemClick}
          >
            <Link to="/instructores" style={activeItem === 'Instructores' ? colorStyle : linkStyle}>
              Instructores
            </Link>
          </Menu.Item>
        </Menu>
      </Fragment>
    )
  }
}
export default SideMenu
