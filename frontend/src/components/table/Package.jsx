import React,{useState} from 'react'
import { FaPlus , FaMinus } from "react-icons/fa";
import Activity from './Activity';

const Package = ({key,Package}) => {
    const [active,setActive] = useState(false);
    return (
        <div key={key} className='w-full flex-col gap-4 border-t-2'>
            <div className='w-full flex items-center gap-4 py-2'>
                <div className='min-w-[50px] flex items-center justify-center'>
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 shadow rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className='min-w-[300px] flex-1'>
                    {Package.title}
                </div>
                <div className='min-w-[250px]'>
                    {Package.rate}
                </div>
                <div className='min-w-[250px]'>
                    {Package.price}
                </div>
                <div className='w-[50px]'>
                    <button className=''
                    onClick={()=>setActive(!active)}>
                        {active ? <FaMinus/> : <FaPlus/>}
                    </button>
                </div>
            </div>
            {active && (
                <div className='w-full'>
                    {Package.Activities.map((p, index) => (
                        <Activity key={index} Activity={p}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Package