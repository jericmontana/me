import React from 'react'

const ButtonComponent = ({classes, label}) => {
  return (
    <div className={classes}>{label}</div>
  )
}

export default ButtonComponent