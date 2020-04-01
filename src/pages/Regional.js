import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {giveMeData} from '../store/action'
import {Link} from "react-router-dom";
import classes from './Regional.module.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis'

const Regional = ({match}) => {
  const store = useSelector(state => state.reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(giveMeData());
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    // eslint-disable-next-line
  }, []);


  const renderTh = (th) => {
    return th.map((column, index) => (
      <th key={index} style={{'border': '1px solid black'}}>
        {column}
      </th>
    ))
  }

  const renderTr = (tr) => {
    return tr.map((row, index) => (
      <tr key={index}>
        {renderTh(tr[index])}
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

  const renderSome = () => {
    let item = store.natProjects.find(prjct => prjct.regPrjcts.find(item => item.url_protocol === match.params.id))
    let itemReg = item.regPrjcts.find(i=> i.url_protocol === match.params.id)
    const renderChart = (k,width,height,idtext) => {
      const datas=[]

      for(let i=1;i<itemReg.tables1.data[0].length;i++){
        if(itemReg.tables1.data[k][i] !== 'н/д'){
          datas.push({x:itemReg.tables1.columns[i],y:parseInt(itemReg.tables1.data[k][i],10)})
        }
      }

      return(
        <div>
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
        <h1>Национальный проект: {item.natProjectsName}</h1>
        <h2>Региональный проект: {itemReg.Name_Project}</h2>
        <small>Дата начала и окончания: {itemReg.Deadlines}</small>
        <div className={classes.Par}>
          <p>Руководитель - {itemReg.Director}</p>
          <p>Администратор - {itemReg.Admin}</p>
          <p>Куратор - {itemReg.Curator}</p>
        </div>
        <h3>Общая цель: {itemReg.Target}</h3>
        <div>
          <h3>Результаты:</h3>
          <div className={classes.Vis}>
            {renderVis()}
          </div>
          <table style={{'border': '1px solid black', 'width': '80%', 'margin': '45px auto 45px'}}>
          <tbody>
            <tr>
              {renderTh(itemReg.tables1.columns)}
            </tr>

            {renderTr(itemReg.tables1.data)}

            </tbody>
          </table>
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
      : <h3>Идет загрузка...</h3>
      }
    </>
  )
}

export default Regional
