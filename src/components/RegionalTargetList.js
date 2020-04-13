import React from 'react'
import classes from './RegionalTargetList.module.css'

const RegionalTargetList = ({targetList}) => {
  const renderDiv = (d) => {
    return d.map((el, index) => (
      <div key={index}>
        <strong>{index + 1}.</strong>
          {el[0]}
       </div>
    ))
  }

  return(
    <div className={classes.Content}>
      {renderDiv(targetList)}
    </div>
  )
}

export default RegionalTargetList