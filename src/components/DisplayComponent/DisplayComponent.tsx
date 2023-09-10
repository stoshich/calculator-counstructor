import React from 'react'
import Display from '../UI/Display/Display'
import classes from './DisplayComponent.module.css'

const DisplayComponent = () => {
  return (
    <div className={classes.disp}>
      <Display />
      <Display />
      <Display />
      <Display />
    </div>
  )
}

export default DisplayComponent