import React from 'react'
import classes from './RegionalAbout.module.css'

const RegionalAbout = (props) => (
  <>
    <h2>Региональный проект: {props.regName}</h2>
      <small>Дата начала и окончания: {props.deadLines}</small>
      <div className={classes.Par}>
        <p><img src={props.directorImg} width='150' height='150' alt="Руководитель" />Руководитель - {props.director}</p>
        <p><img src={props.adminImg} width='150' height='150' alt="Администратор" />Администратор - {props.admin}</p>
        <p><img src={props.curatorImg} width='150' height='150' alt="Куратор" />Куратор - {props.curator}</p>
      </div>
      <h3>Общая цель: {props.target}</h3>
  </>
)

export default RegionalAbout