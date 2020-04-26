import React from 'react'
import classes from './RegionalAbout.module.css'

interface RegionalAbout {
  regName: string, 
  deadLines: string, 
  directorImg: string,  
  director: string,  
  adminImg: string,  
  admin: string,  
  curatorImg: string, 
  curator: string, 
  target: string
}

const RegionalAbout: React.FC<RegionalAbout> = ({
  regName, 
  deadLines, 
  directorImg, 
  director, 
  adminImg, 
  admin, 
  curatorImg,
  curator,
  target
}) => (
  <>
    <h2>Региональный проект: {regName}</h2>
      <small>Дата начала и окончания: {deadLines}</small>
      <div className={classes.Par}>
        <div>
          <img src={directorImg} width='150' height='150' alt="Руководитель" />
          <p>Руководитель - {director}</p>
        </div>
        <div>
          <img src={adminImg} width='150' height='150' alt="Администратор" />
          <p>Администратор - {admin}</p>
        </div>
        <div>
          <img src={curatorImg} width='150' height='150' alt="Куратор" />
          <p>Куратор - {curator}</p>
        </div>
      </div>
      <h3>Общая цель: {target}</h3>
  </>
)

export default RegionalAbout