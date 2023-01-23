import React from 'react'
import { FaLock } from "react-icons/fa"
import { IoIosMore } from "react-icons/io"

function UserBox() {
    return (
        <div className='flex items-center justify-between hover:bg-gray-200 py-2 px-4 p-1 rounded-full cursor-pointer'>
            <img src="https://pbs.twimg.com/profile_images/1616714788561633283/qcrX2F9X_400x400.jpg" alt="profile" className='w-11 h-11 rounded-full' />
            <div className='mr-16'>
                <div className='flex justify-between items-center font-bold'>
                    <span>Mazlum</span><FaLock className='mr-3' />
                </div>
                <span className='text-gray-600 text-sm'>@Mazlum_tsky</span>
            </div>
            <div className="text-lg">
                <IoIosMore />
            </div>
        </div>
    )
}

export default UserBox