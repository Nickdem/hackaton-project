import React from 'react'

const RegionalTable: React.FC<any> = ({tables}) => {
  const renderTd = (td: string[]) => {
    return td.map((column: string, index: number) => (
      <td key={index}>
        {column}
      </td>
    ))
  }

  return(
    <table>
      <tbody>
      <tr>
        { 
          tables.columns.map((column: string, index: number) => (
            <th key={index}>
              { column === "Name" ? "Наименование показателя" : column}
            </th>
          ))      
        }
      </tr>

      {
        tables.data.map((row: never, index: number) => (
          <tr key={index}>
            {renderTd(tables.data[index])}
          </tr>
        ))
      }

      </tbody>
    </table>
  )
}

export default RegionalTable