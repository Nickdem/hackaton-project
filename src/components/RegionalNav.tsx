import React from 'react'
import {Link} from "react-router-dom";
import classes from './RegionalNav.module.css'
import { IRegPrjct } from '../interfaces';

interface RegNav {
  natName: string,
  regProjects: IRegPrjct[],
  id: string
}

const RegionalNav: React.FC<RegNav> = ({natName, regProjects, id}) => {
  const clickHandler = (e: React.MouseEvent, url: string) => {
    if (url !== id) {
       return null
    } else {
      e.preventDefault()
    }
  }

  return (
    <>
      <h1>Национальный проект: {natName}</h1>
      <ol className={classes.Links}>
        {regProjects.map((reg, index) => (
        <li key={index}>
          <Link 
            className={reg.url_protocol !== id ? classes.Link : classes.ActiveLink} 
            to={`/regional-project/${reg.url_protocol}`}
            onClick={e => clickHandler(e, reg.url_protocol)}
          >
          {reg.Name_Project}
          </Link>
        </li>
        ))}
      </ol>
    </>
  )
}

export default RegionalNav