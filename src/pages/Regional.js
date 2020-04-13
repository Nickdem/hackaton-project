import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {giveMeProject} from '../store/action'
import {Link} from "react-router-dom";
import classes from './Regional.module.css'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis'
import RegionalNav from '../components/RegionalNav';
import RegionalAbout from '../components/RegionalAbout';

const Regional = ({match}) => {
  const store = useSelector(state => state.regional)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(giveMeProject());
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    // eslint-disable-next-line
  }, []);

  const renderTh = (th) => {
    return th.map((column, index) => (
      <th key={index}>
        { column === "Name" ? "Наименование показателя" : column}
      </th>
    ))
  }
  
   const renderTd = (td) => {
    return td.map((column, index) => (
      <td key={index}>
        {column}
      </td>
    ))
  }

  const renderTr = (tr) => {
    return tr.map((row, index) => (
      <tr key={index}>
        {renderTd(tr[index])}
      </tr>
    ))
  }

  const renderDiv = (d) => {
    return d.map((el, index) => (
      <div key={index}>
        <strong>{index + 1}.</strong>
        {el[0]}
      </div>
    ))
  }

  const [buttonName, setButtonName] = useState('Показать таблицей')
  const [drawer, setDrawer] = useState(false)

  const buttonClickHandler = () => {
    if(buttonName === "Показать таблицей"){
      setButtonName('Показать графиком')
    } else if(buttonName === "Показать графиком"){
      setButtonName('Показать таблицей')
    }

    setDrawer(!drawer)
  }

  const renderSome = () => {
    let item = store.project.find(prjct => prjct.regPrjcts.find(item => item.url_protocol === match.params.id))
    if(item === undefined){
      return (<Loader mess={"Страница не существует!"}/>)
    }
    let itemReg = item.regPrjcts.find(i=> i.url_protocol === match.params.id)

    document.title = `${itemReg.Name_Project}`
    const renderChart = (k,width,height,idtext) => {
      const datas=[]

      for(let i=1;i<itemReg.tables1.data[0].length;i++){
        if(itemReg.tables1.data[k][i] !== 'н/д'){
          datas.push({x:itemReg.tables1.columns[i],y:parseFloat(itemReg.tables1.data[k][i].replace(",", "."))})
        }
      }

      return(
        <div className={classes.Chart}>
          <p id={idtext}>{itemReg.tables1.data[k][0]}</p>

          <XYPlot margin={{bottom: 70}} xType="ordinal" width={width} height={height}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries
            data={datas}
          />

          </XYPlot>
        </div>
      )
    }

    const renderVis = () => {
      const listCharts=[];
      for (let i = 0; i < itemReg.tables1.data.length; i++ ){
        listCharts.push(<div key={i}>{renderChart(i,300,300)}</div>);
      }
      return (
        listCharts
      )
    }

    return(
      <div className={classes.Reg}>
        <RegionalNav
          natName={item.natProjectsName} 
          regProjects={item.regPrjcts} 
          id={match.params.id}
        />
        <RegionalAbout 
          regName={itemReg.Name_Project}
          deadLines={itemReg.Deadlines}
          directorImg={itemReg.Director_img}
          director={itemReg.Director}
          adminImg={itemReg.Admin_img}
          admin={itemReg.Admin}
          curatorImg={itemReg.Curator_img}
          curator={itemReg.Curator}
          target={itemReg.Target}
        />
        <div style={{borderTop: '3px solid #dcdcdc'}}>
          <h3>Результаты:</h3>
          <button className={classes.Button} onClick={()=> buttonClickHandler()}>{buttonName}</button>
          {!drawer
           ?<div className={classes.Vis}>
              {renderVis()}
            </div>
           :<table>
              <tbody>
                <tr>
                  {renderTh(itemReg.tables1.columns)}
                </tr>

              {renderTr(itemReg.tables1.data)}

              </tbody>
            </table>
          }
          {match.params.id === 'bkad1'
          // eslint-disable-next-line
          ? <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a264c5718698326333e8ae05ff8ed8e74fdc540c1eba298df08333907715721&amp;source=constructor" className={classes.Frame} frameBorder="0"></iframe>
          : null}
          <div className={classes.Content}>
                {renderDiv(itemReg.tables.data)}
          </div>
        </div>
      </div>
    )
  }

  return(
    <>
      <div className={classes.Head}>
        <Link to={'/'}>Вернуться на главную</Link>
        <Link to={'/'}>
          <img src="https://cdn.tass.ru/data/files/ru/new-logo.svg" width="232" height="41" alt='Лого'/>
        </Link>
      </div>
      {store.loading === false
      ?
      <>{renderSome()}</>
      : <Loader mess={"Подождите немного! Идёт загрузка..."} />
      }
      <Footer />
    </>
  )
}

export default Regional
