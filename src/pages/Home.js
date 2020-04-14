import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {giveMeData} from '../store/action'
import classes from './Home.module.css'
import HomeProject from '../components/HomeProject'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import HomeWords from '../components/HomeWords'
import HomeNews from '../components/HomeNews'
import HomeLinks from '../components/HomeLinks'

const Home = () => {
  document.title = "Главная"
  const data = useSelector(state => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(giveMeData());
    // eslint-disable-next-line
  }, []);

  const [count, setCount] = useState(0)
  
  const customStyle = {
    'cul': classes.Cul,
    'digeco': classes.DigEco,
    'bkad': classes.Bkad
  }

  const [newsCounter, setNewsCounter] = useState(3)

  useEffect(() => {
    setNewsCounter(3)
    // eslint-disable-next-line
  }, [count]);

  const linksClickHandler = (c) => {
    setCount(c)
  }

  return (
    <>
      <div className={classes.Head}>
        <img src="https://cdn.tass.ru/data/files/ru/new-logo.svg" width="232" height="41" alt='Лого'/>
      </div>
        {data.loading === false
        ? <div className={customStyle[data.natProjects[count].natProjectsUrl] ? customStyle[data.natProjects[count].natProjectsUrl] : classes.Content}>
            <HomeLinks links={data.natProjects} counter={count} clickHandler={linksClickHandler}/>
            <div className={classes.Wrapper}>
              <button className={classes.Button} onClick={()=> count === 0 ? setCount(data.natProjects.length - 1) : setCount(count - 1)}></button>
              <HomeProject natProject={data.natProjects[count]}/>
              <button className={classes.Button} onClick={()=> count === data.natProjects.length - 1 ? setCount(0) : setCount(count + 1)}></button>
            </div>
          </div>
        : <Loader mess={"Подождите немного! Идёт загрузка..."} />
        }
        
        <HomeWords />
        
        {data.news[0]
        ? <div>
            <h2 style={{'padding': '1% 2%', backgroundColor: '#f5f5f5', boxShadow: '0 0 5px grey'}}>Последние новости проекта {data.natProjects[count].natProjectsName.toUpperCase()}:</h2>
            <HomeNews newsList={data.news[0]} counter={newsCounter} projectName={data.natProjects[count].natProjectsName} />
            <button 
              onClick={()=> setNewsCounter(newsCounter + 3)}
              className={newsCounter >= data.news[0][data.natProjects[count].natProjectsName].length || data.news[0][data.natProjects[count].natProjectsName].length === 0 ? classes.NewsButtonHidden : classes.NewsButton}              
            >
              Показать ещё!
            </button>
          </div>                
        : null
        }
        <Footer />
    </>
  )
}

export default Home
