import React from 'react'
import classes from './RegionalTargetList.module.css'

const RegionalTargetList: React.FC<any> = ({targetList}) => {
  const renderDiv = (d: string[]) => {
    return d.map((el: string, index: number) => (
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