import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ msg, bgColor }) => {
  Message.propTypes = {
    msg: PropTypes.object,
    bgColor: PropTypes.string
  }

  const styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: bgColor
  }

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  )
}

export default Message
