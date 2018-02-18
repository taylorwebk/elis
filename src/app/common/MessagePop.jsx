import React from 'react'
import { Icon } from 'semantic-ui-react'

const styles = {
  containerStyles: {
    display: 'block',
    width: '320px',
    boxShadow: '1px 1px 3px 1px #aaa',
    borderRadius: '3px',
    padding: '10px 15px',
    paddingTop: '18px',
    fontSize: '15px'
  },
  messageStyles: {
    lineHeight: '0.5em',
    display: 'inline-block'
  },
  iconStyles: {
    display: 'inline-block',
    transform: 'translateY(-10px)'
  }
}
const colors = {
  success: 'green',
  warning: 'orange',
  error: 'red'
}
const types = {
  success: 'Éxito',
  warning: 'Atención',
  error: 'Error'
}
const icons = {
  success: 'check circle',
  warning: 'warning circle',
  error: 'remove circle'
}
const MessagePop = ({ message, type }) => {
  return (
    <div style={styles.containerStyles}>
      <div style={styles.iconStyles}>
        <Icon name={icons[type]} size="large" color={colors[type]} />
      </div>
      <div style={styles.messageStyles}>
        <b style={{ color: colors[type] }} >{types[type]}</b>
        <p>{message}</p>
      </div>
    </div>
  )
}
export default MessagePop
