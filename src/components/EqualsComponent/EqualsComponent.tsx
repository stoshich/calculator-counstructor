import React from 'react'
import Button from '../UI/Button/Button'
import classes from './EqualsComponent.module.css'

const EqualsComponent = () => {
  return (
    <div className={classes.equals}>
      <Button value='=' filled />
    </div>
  )
}

export default EqualsComponent