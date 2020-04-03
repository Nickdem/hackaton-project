import React from 'react'
import {Link} from "react-router-dom"
import classes from './HomeProject.module.css'

const HomeProject = ({natProject}) => {
  const renderRegPrjct = (some) => {
    return some.regPrjcts.map((prjct, index) => (
      <li key={index}>
        <Link  to={'/regional-project/' + prjct.url_protocol}>
          {prjct.Name_Project}
        </Link>
      </li>
    ))
  }


  return(
    <div className={classes.HomeProject}>
      <div className={classes.Nat}>
        <h3>{natProject.natProjectsName}:</h3>
        <div>
          <p>Срок реализации: <br/><strong>{natProject.natProjectsDes.time}</strong></p>
          <p>Бюджет проекта: <br/><strong>{natProject.natProjectsDes.budget}</strong></p>
        </div>
        <p>{natProject.natProjectsDes.par}</p>
      </div>
      <div className={classes.Reg}><h3>Региональные проекты:</h3><ul>{renderRegPrjct(natProject)}</ul></div>
    </div>
  )
}

export default HomeProject
