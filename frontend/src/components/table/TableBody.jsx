import React from 'react'
import Package from './Package';


const TableBody = ({key,Packages}) => {
    return (
        <div key={key} className='w-full flex-col gap-4 border-t-2'>
            <Package Packages={Packages}/>
        </div>
    )
}

export default TableBody