import React from 'react'
import Button from '../UI/Button/Button'
import classes from './NumbersComponent.module.css'

const NumbersComponent = () => {

  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']

  return (
    <div className={classes.numbers}>
      {numbers.map(number => (
        <div key={number} className={classes.item}>
          <Button value={number} />
        </div>
      ))}
    </div>
  )
}

export default NumbersComponent