import React from 'react'

function SideLink({ name, icon, active, handleMenuItemClick }) {
    const isActive = active === name;
    return (
        <div>
            <li className='group' onClick={() => handleMenuItemClick(name)}>
                <a href={name.toLowerCase()} className='block text-xl mb-2  cursor-pointer' >
                    <div className="inline-block">
                        <div className={`flex items-center group-hover:bg-gray-200 rounded-full  pl-3 pr-8 py-3 
                        ${isActive ? "text-black font-bold" : ""}`
                        }>
                            <span>{icon}</span>
                            <span className="ml-4">{name}</span>
                        </div>
                    </div>
                </a>
            </li>
        </div>
    )
}

export default SideLink