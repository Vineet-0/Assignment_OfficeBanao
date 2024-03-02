import React,{useState} from 'react'
import Table from './table/Table'
import Other from './Other';

const BodyContent = () => {
    const [active,setActive] = useState('overview');
    return (
        <div className='px-8 pt-4 flex-col'>
            <div className='w-full flex items-center justify-start'>
                <div className={`w-[250px] font-semibold flex items-center justify-center py-2 border-b-2 border-black pointer ${active === 'overview' ? 'opacity-100' : 'opacity-20'}`}
                    onClick={()=>setActive('overview')}>
                    Overview
                </div>
                <div className={`w-[250px] font-semibold flex items-center justify-center py-2 border-b-2 border-black pointer ${active === 'other' ? ' opacity-100' : 'opacity-20'}`}
                    onClick={()=>setActive('other')}>
                    Other
                </div>
            </div>
            <div className='w-full h-full'>
                {active=='overview' && (
                    <Table />
                )}
                {active=='other' && (
                    <Other />
                )}
            </div>
        </div>
    )
}

export default BodyContent