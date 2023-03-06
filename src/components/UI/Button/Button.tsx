import React, { FC } from 'react'
import classes from './Button.module.css'

interface ButtonProps {
  value: string;
  filled?: boolean
}

const Button: FC<ButtonProps> = ({ value, filled }) => {
  return (
    <div className={filled ? classes.btnEquals : classes.btn}>{value}</div>
  )
}

export default Button