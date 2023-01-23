import React from 'react'
import { SerachIcon } from '../icons/Icon'
import { BiSearch } from "react-icons/bi"
import { Timeline } from 'react-twitter-widgets'

function widgets() {
  return (
    <aside className='w-96 h-screen sticky top-0'>
      <div className='flex items-center space-x-4  bg-slate-100 p-3 m-3 text-gray-500 rounded-full focus-within:bg-white focus-within:ring-1 focus-within:text-blue-400'>
        <BiSearch size={24} />
        <input type="text" placeholder="Twitter'da Ara" className='placeholder-gray-600 bg-transparent outline-none w-full text-black text-sm' />
      </div>
      <div className='mt-5 pl-4'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'GalatasaraySK'
          }}
          options={{
            height: '671'
          }}
        />
      </div>
    </aside>
  )
}

export default widgets