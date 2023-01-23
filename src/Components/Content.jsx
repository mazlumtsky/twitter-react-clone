import React from 'react'
import TwitterBox from '../loyut/TwitterBox'

function Content() {
    return (
        <main className='flex-1 flex flex-col border-r border-l'>
            <header className='sticky top-0 z-10  flex items-center p-4 border-b border-gray-300 mazlum'>
                <span className='font-bold text-gray-900 text-xl '>Anasayfa</span>
            </header>
            <div className='flex space-x-4 px-4 py-4'>
                <img src="https://pbs.twimg.com/profile_images/1616714788561633283/qcrX2F9X_400x400.jpg" alt="profile" className='w-11 h-11 rounded-full' />
                <TwitterBox />
            </div>
        </main >
    )
}

export default Content