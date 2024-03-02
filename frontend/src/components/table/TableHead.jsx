import React from 'react'

const TableHead = () => {
  return (
    <div className='w-full flex items-center gap-4 py-2 bg-sky-200'>
        <div className='min-w-[50px] flex items-center justify-center'>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 shadow rounded dark:bg-gray-700 dark:border-gray-600" />
        </div>
        <div className='min-w-[300px] flex-1'>
            Packages
        </div>
        <div className='w-[250px]'>
            Rate (in sqft)
        </div>
        <div className='w-[250px]'>
            Total
        </div>
        <div className='w-[50px]'>

        </div>
    </div>
  )
}

export default TableHead