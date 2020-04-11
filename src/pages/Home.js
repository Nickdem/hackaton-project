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

  const [count, setCount] = useState(0)

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

  const [newsCounter, setNewsCounter] = useState(3)

  // const renderNews = (a, c) => {
  //   const newsList = []

  //   for(let i = 0; i < a.length &&  i < c; i++){
  //     newsList.push(
  //       <div key={i} className={classes.News}>
  //         <img src={a[i].img} width='150' height='150' alt="Изображение новости"/>  
  //           <div style={{'flex': '1', marginLeft: '1%'}}>
  //           <small>{a[i].date}</small>
  //           <h3>{a[i].name}</h3>
  //           <p>{a[i].par}</p>
  //         </div>
  //       </div>
  //     )
  //   }

  //   return (newsList)
  // }


  const renderNews = (a, c) => {
	  const nameProject = ["Безопасные и качественные автомобильные дороги","Культура","Цифровая экономика"];
	  const news = [];
      const datanews = a[nameProject[count]];
	  for( let i = 0; i <= datanews.length && i < c; i++ ){
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
		}else{
				break;
		}
	  }
	  return news;
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
              <button className={classes.Button} onClick={()=> count === 0 ? setCount(data.natProjects.length - 1) : setCount(count - 1)}></button>
              <HomeProject natProject={data.natProjects[count]}/>
              <button className={classes.Button} onClick={()=> count === data.natProjects.length - 1 ? setCount(0) : setCount(count + 1)}></button>
            </div>
          </div>
        : <Loader mess={"Подождите немного! Идёт загрузка..."} />
        }
        <div>
          <p style={{'width': '75%', textAlign: 'center', 'margin': ' 5% auto', fontSize: '24px'}}>Национальные проекты направлены на обеспечение прорывного научно-технологического и социально-экономического развития России, повышения уровня жизни, создания условий и возможностей для самореализации и раскрытия таланта каждого человека</p>
        </div>
        <h2 style={{'padding': '1% 2%', backgroundColor: '#f5f5f5', boxShadow: '0 0 5px grey'}}>Последние новости:</h2>
        {data.loading === false
        ? <div>
            {renderNews(data.news[0], newsCounter)}
            <button 
              onClick={()=> setNewsCounter(newsCounter + 3)}
              className={newsCounter >= data.news[0].length || data.news[0].length === 0 ? classes.NewsButtonHidden : classes.NewsButton}              
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
