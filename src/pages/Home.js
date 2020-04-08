import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {giveMeData, giveMeNews} from '../store/action'
import classes from './Home.module.css'
import HomeProject from '../components/HomeProject'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const Home = () => {
  document.title = "Главная"
  const data = useSelector(state => state.reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(giveMeData());
    dispatch(giveMeNews());
    // eslint-disable-next-line
  }, []);

  const [move, setMove] = useState(false)
  const [count, setCount] = useState(0)
  const [back, setBack] = useState(false)

  useEffect(() =>{
    if(count === 0){
      setBack(true)
      setMove(false)
    }else if(count + 1 === data.natProjects.length){
      setMove(true)
      setBack(false)
    }else{
      setBack(false)
      setMove(false)
    }
    // eslint-disable-next-line
  }, [count])

  const customStyle = {
    'cul': classes.Cul,
    'digeco': classes.DigEco,
    'bkad': classes.Bkad
  }

  const renderLinks = () => {
	  return data.natProjects.map((prjct, index) => (
      <h3 key={index} className={count !== index ? classes.Link : classes.ActiveLink} onClick={()=>setCount(index)}>
        {prjct.natProjectsName}
      </h3>
    ))
  }

  return (
    <>
      <div className={classes.Head}>
        <img src="https://cdn.tass.ru/data/files/ru/new-logo.svg" width="232" height="41" alt='Лого'/>
      </div>
        {data.loading === false
        ? <div className={customStyle[data.natProjects[count].natProjectsUrl] ? customStyle[data.natProjects[count].natProjectsUrl] : classes.Content}>
            <div className={classes.Links}>{renderLinks()}</div>
            <div className={classes.Wrapper}>
              <button className={back ? classes.ButtonHidden : classes.Button} onClick={()=>setCount(count - 1)} disabled={back}></button>
              <HomeProject natProject={data.natProjects[count]}/>
              <button className={move ? classes.ButtonHidden : classes.Button} onClick={()=>setCount(count + 1)} disabled={move}></button>
            </div>
          </div>
        : <Loader mess={"Подождите немного! Идёт загрузка..."} />
        }
        <h2 style={{marginLeft: '2%'}}>Последние новости:</h2>
        {data.loading === false
        ? data.news.map((news, index) => {
            return(
              <div key={index} className={classes.News}>
                <h3>{news.name}</h3>
                <p>{news.par}</p>
              </div>
            )
          })
        : null
        }
        <Footer />
    </>
  )
}

export default Home
