import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {giveMeData} from '../store/action'
import {Link} from "react-router-dom";
import classes from './Home.module.css'

const Home = () => {
  const data = useSelector(state => state.reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(giveMeData());
    // eslint-disable-next-line
  }, []);

//  const row = {
//    border: '1px solid black',
//    display: 'flex',
//    flexWrap: 'wrap',
//    justifyContent: 'space-between'
//  }

//  const tile = {
//    border: '1px solid black',
//    display: 'flex',
//    flexDirection: 'column'
//  }

  const renderLinks = () => {
	  return data.natProjects.map((prjct, index) => (
      <h3 key={index} onClick={()=>setCount(index)}>
        {prjct.natProjectsName}
      </h3>
    ))
  }

  const [move, setMove] = useState(false)
  const [count, setCount] = useState(0)
  const [back, setBack] = useState(false)

  useEffect(() =>{
    if(count === 0){
      setBack(true)
    }else if(count + 1 === data.natProjects.length){
      setMove(true)
    }else{
      setBack(false)
      setMove(false)
    }
    // eslint-disable-next-line
  }, [count])

//  const renderPrjct = () => {
//	  return data.natProjects.map((prjct, index) => (
//      <div key={index} style={{'border': '1px solid black', 'margin': '15px'}}>
//        {prjct.natProjectsName}
//        <ul>{renderRegPrjct(prjct)}</ul>
//      </div>
//    ))
//  }

  const renderRegPrjct = (some) => {
    return some.regPrjcts.map((prjct, index) => (
      <li key={index}>
        <Link  to={'/regional-project/' + prjct.url_protocol}>
          {prjct.Name_Project}
        </Link>
      </li>
    ))
  }

//  const [style, setStyle] = useState({ border: '1px solid black'})

//   в вертску
//      <button onClick={()=>setStyle(tile)}>Список</button>
//      <button onClick={()=>setStyle(row)}>Плитка</button>
//      <div style={style}>
//        {data.loading === false
//        ? <>
//            {renderPrjct()}
//          </>
//        : <h1>Идёт загрузка...</h1>
//        }
//      </div>

const customStyle = {
  'cul': classes.Cul,
  'digeco': classes.DigEco,
  'bkad': classes.Bkad
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
              <button className={classes.Button} onClick={()=>setCount(count - 1)} disabled={back}>&lt;</button>
              <div className={classes.Prjct}>
                <div className={classes.Nat}>
                  <h3>{data.natProjects[count].natProjectsName}:</h3>
                  <div>
                    <p>Срок реализации: <strong>{data.natProjects[count].natProjectsDes.time}</strong></p>
                    <p>Бюджет проекта: <strong>{data.natProjects[count].natProjectsDes.budget}</strong></p>
                  </div>
                  <p>{data.natProjects[count].natProjectsDes.par}</p>
                </div>
                <div className={classes.Reg}><h3>Региональные проекты:</h3><ul>{renderRegPrjct(data.natProjects[count])}</ul></div>
              </div>
              <button className={classes.Button} onClick={()=>setCount(count + 1)} disabled={move}>&gt;	</button>
            </div>
          </div>
        : <h1>Идёт загрузка...</h1>
        }
    </>
  )
}

export default Home
