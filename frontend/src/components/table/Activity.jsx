import React,{useState} from 'react'
import { FaChevronDown , FaChevronUp } from "react-icons/fa";
import Work from './Work';

const Activity = ({key,Activity}) => {
    const [active,setActive] = useState(false);
    return (
        <div key={key} className='w-full flex-col gap-4 border-b-1'>
            <div className='w-full flex items-center gap-4 py-2'>
                <div className='w-[25px] h-[25px] border-l-2 border-b-2 relative top-[-12px] right-[-24px]'>

                </div>
                <div className='min-w-[50px] flex items-center justify-center'>
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 shadow rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className='min-w-[300px] flex-1'>
                    {Activity.title}
                </div>
                <div className='min-w-[250px]'>
                    {Activity.rate}
                </div>
                <div className='min-w-[250px]'>
                    {Activity.price}
                </div>
                <div className='w-[50px]'>
                    <button className=''
                    onClick={()=>setActive(!active)}>
                        {active ? <FaChevronUp/> : <FaChevronDown/>}
                    </button>
                </div>
            </div>
            {active && (
                <div className='w-full'>
                    {Activity.Works.map((p, index) => (
                        <Work key={index} Work={p}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Activity