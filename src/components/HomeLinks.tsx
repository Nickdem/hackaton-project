import React from 'react'
import classes from './HomeLinks.module.css'
import { INatProject } from '../interfaces'

interface Links {
  links: INatProject[],
  counter: number,
  clickHandler(id: number): void
}

const HomeLinks: React.FC<Links> = ({links, counter, clickHandler}) => (
  <div className={classes.Links}>
    {links.map((prjct, index) => (
      <h3 key={index} className={counter !== index ? classes.Link : classes.ActiveLink} onClick={()=>clickHandler(index)}>
        {prjct.natProjectsName}
      </h3>
    ))}
  </div>
)

export default HomeLinks