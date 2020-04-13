import React from 'react'

const RegionalTable = ({tables}) => {
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

  return(
    <table>
      <tbody>
      <tr>
      {renderTh(tables.columns)}
      </tr>

      {renderTr(tables.data)}

      </tbody>
    </table>
  )
}

export default RegionalTable