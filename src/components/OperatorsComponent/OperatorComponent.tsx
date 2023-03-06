import React from 'react'
import Button from '../UI/Button/Button'
import classes from './OperatorComponent.module.css'


const OperatorComponent = () => {

  const operators = ['/', 'x', '-', '+']

  return (
    <div className={classes.operators}>
      {operators.map(operator => (
        <div className={classes.item} key={operator}>
          <Button value={operator} />
        </div>
      ))}
    </div>
  )
}

export default OperatorComponent