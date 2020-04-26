import React from 'react'
import classes from './Footer.module.css'

const Footer: React.FC = () => (
	<div className={classes.Footer}>
      <span>Сделано на React+Redux</span>
      <div>
        <small>Авторы сайта:</small>
        <p>Демидов Никита</p>
        <p>Платонов Павел</p>
      </div>
    </div>
)

export default Footer
