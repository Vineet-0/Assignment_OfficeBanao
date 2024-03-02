import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between px-12 py-4'>
        <h1 className='text-3xl'>
            Create Workorder
        </h1>
        <button className='text-lg text-teal-900 hover:text-white px-12 py-2 rounded-md bg-teal-300 hover:bg-teal-400'>
            Save
        </button>
    </div>
  )
}

export default Header