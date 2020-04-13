import React from 'react'
import {Link} from "react-router-dom";
import classes from './RegionalNav.module.css'

const RegionalNav = ({natName, regProjects, id}) => (
  <>
    <h1>Национальный проект: {natName}</h1>
    <ol className={classes.Links}>
      {regProjects.map((reg, index) => (
      <li key={index}>
        <Link 
          className={reg.url_protocol !== id ? classes.Link : classes.ActiveLink} 
          to={`/regional-project/${reg.url_protocol}`}
          onClick={reg.url_protocol !== id ? null : e => e.preventDefault()}
        >
        {reg.Name_Project}
        </Link>
      </li>
      ))}
    </ol>
  </>
)

export default RegionalNav