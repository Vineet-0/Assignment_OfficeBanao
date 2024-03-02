import React from 'react'
import Package from './Package';


const TableBody = ({Packages}) => {
    return (
        <div className='h-full'>
          {Packages.map((P, index) => (
              <Package key={index} Package={P}/>
          ))}
        </div>
    )
}

export default TableBody