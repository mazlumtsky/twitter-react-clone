import React, { useState } from 'react'
import { AnketIcon, EmojiIcon, GaleryIcon, GifIcon, KonumIcon, PlanIcon } from '../icons/Icon'
import app from "../firebase";
import { Timeline } from 'react-twitter-widgets';
function TwitterBox() {
    const [content, SetContent] = useState("");

    const sendTweet = () => {
        if (content !== '') {

        }
        SetContent("");
    }
    return (
        <div className='flex-1'>
            <textarea className='w-full text-xl outline-none bg-transparent placeholder:text-gray-600 overflow-hidden ' placeholder='Neler oluyor?'
                onChange={(e) => SetContent(e.target.value)}
                value={content}

            ></textarea>
            <div className='flex items-center  justify-between'>
                <div className='flex items-center cursor-pointer'>
                    <span className='flex items-center  justify-center hover:bg-blue-100 w-9 h-9 hover:bg-opacity-60 rounded-full'><GaleryIcon /></span>
                    <span className='flex items-center  justify-center hover:bg-blue-100 w-9 h-9 hover:bg-opacity-60 rounded-full'><GifIcon /></span>
                    <span className='flex items-center  justify-center hover:bg-blue-100 w-9 h-9 hover:bg-opacity-60 rounded-full'><AnketIcon /></span>
                    <span className='flex items-center  justify-center hover:bg-blue-100 w-9 h-9 hover:bg-opacity-60 rounded-full'><EmojiIcon /></span>
                    <span className='flex items-center  justify-center hover:bg-blue-100 w-9 h-9 hover:bg-opacity-60 rounded-full'><PlanIcon /></span>
                    <span className='flex items-center  justify-center hover:bg-blue-100 w-9 h-9 hover:bg-opacity-60 rounded-full'><KonumIcon /></span>
                </div>
                <button className='bg-[#1D9BF0] px-4 py-2  text-white rounded-full'
                    onClick={sendTweet}
                >Tweetle</button>
                
            </div>
            <div className=' mt-5'>
            <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'reactjs'
                    }}
                    options={{
                       width:'500',
                        height: '600'
                    }}
                />
               
            </div>
        </div>
    )
}

export default TwitterBox