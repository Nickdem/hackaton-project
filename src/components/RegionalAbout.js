import React from 'react'
import classes from './RegionalAbout.module.css'

const RegionalAbout = (props) => (
  <>
    <h2>Региональный проект: {props.regName}</h2>
      <small>Дата начала и окончания: {props.deadLines}</small>
      <div className={classes.Par}>
        <div>
          <img src={props.directorImg} width='150' height='150' alt="Руководитель" />
          <p>Руководитель - {props.director}</p>
        </div>
        <div>
          <img src={props.adminImg} width='150' height='150' alt="Администратор" />
          <p>Администратор - {props.admin}</p>
        </div>
        <div>
          <img src={props.curatorImg} width='150' height='150' alt="Куратор" />
          <p>Куратор - {props.curator}</p>
        </div>
      </div>
      <h3>Общая цель: {props.target}</h3>
  </>
)

export default RegionalAbout