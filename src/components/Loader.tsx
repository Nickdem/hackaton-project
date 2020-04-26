import React from 'react'
import classes from './Loader.module.css'

interface Loader {
  mess: string
}

const Loader: React.FC<Loader> = ({mess}) => (
  <h1 className={classes.Loader}>{mess}</h1>
)

export default Loader
