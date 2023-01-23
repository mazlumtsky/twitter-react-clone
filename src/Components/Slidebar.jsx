import React, { useState } from 'react';
import twitterlogo from "../images/logo.svg";
import SideLink from '../loyut/SideLink';
import { HomeIcon, ExpolereIcon, NotificationIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon } from '../icons/Icon'
import UserBox from '../loyut/UserBox';
function Slidebar() {
  const sideLinks = [
    {
      name: "Anasayfa",
      icon: <HomeIcon />
    },
    {
      name: "Keşfet",
      icon: <ExpolereIcon />
    },
    {
      name: "Bildirimler",
      icon: <NotificationIcon />
    },
    {
      name: "Mesajlar",
      icon: <MessagesIcon />
    },
    {
      name: "Yer İşaretleri",
      icon: <BookmarksIcon />
    },
    {
      name: "Listeler",
      icon: <ListsIcon />
    },
    {
      name: "Profil",
      icon: <ProfileIcon />
    },
    {
      name: "Daha Fazla",
      icon: <MoreIcon />
    },
  ]

  const [active, SetActive] = useState("Anasayfa");
  const handleMenuItemClick = (name) => {
    SetActive(name);
  }
  return (
    <div className='max-h-screen sticky top-0 w-72 flex flex-col justify-between px-2  mt-1 mb-4 ml-2'>
      <div>
        <div className='flex items-center justify-center w-12 h-12  rounded-full hover:bg-blue-100  transition-colors transform duration-300'>
          <img src={twitterlogo} alt="Twitter Logo" className='w-7 h-7 mt-1' />
        </div>
        <nav className='mt-2'>
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink key={name} name={name} icon={icon} active={active} handleMenuItemClick={handleMenuItemClick} />
            ))}
          </ul>

        </nav>
        <button className='bg-[#1D9BF0] hover:bg-[#2576ac] text-white shadow-lg  rounded-full py-3 px-8 w-11/12 font-semibold transform  transition-all'>Tweet</button>
      </div>
      <div>
        <UserBox />
      </div>
    </div>
  )
}

export default Slidebar