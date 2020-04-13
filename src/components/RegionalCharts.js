import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
  } from 'react-vis'
import classes from './RegionalCharts.module.css'

const RegionalCharts = ({tables}) => {
  const renderChart = (k,width,height,idtext) => {
    const datas=[]
  
    for(let i = 1; i < tables.data[0].length; i++){
      if(tables.data[k][i] !== 'н/д'){
      datas.push({x:tables.columns[i],y:parseFloat(tables.data[k][i].replace(",", "."))})
      }
    }
  
    return(
      <div className={classes.Chart}>
        <p id={idtext}>{tables.data[k][0]}</p>

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

    for (let i = 0; i < tables.data.length; i++ ){
        listCharts.push(<div key={i}>{renderChart(i,300,300)}</div>);
    }

    return (listCharts)
  }

  return(
    <div className={classes.Vis}>
      {renderVis()}
    </div>
  )
}

export default RegionalCharts