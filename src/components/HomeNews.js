import React from 'react'
import classes from './HomeNews.module.css'

const HomeNews = ({newsList, counter, projectName}) => {
  const news = [];
  const datanews = newsList[projectName];

  for( let i = 0; i <= datanews.length && i < counter; i++ ){
    if(datanews[i]){
      news.push(
        <a href={"http://"+datanews[i].url}  className={classes.NewsLink} key={i}>
        <div className={classes.News}>
        <img src={datanews[i].img_url} width='150' height='150' alt="Изображение новости" />                 
        <div style={{'flex': '1', marginLeft: '1%'}}>
            <small>{datanews[i].date}&nbsp;{datanews[i].time}</small>
            <h3>{datanews[i].news}</h3>
        </div>
        </div>
        </a>
      );
    }else {
      break;
    }
  }
  
  return news;    
  
  } 

export default HomeNews