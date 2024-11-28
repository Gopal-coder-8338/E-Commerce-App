//import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
        <Link to='/'><img src={assets.logo} className='w-36' alt='logo' /></Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden' />
            </NavLink>
        </ul>
        
        <div className='flex items-center gap-6'>
            <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='search' />

            <div className='group relative'>
                <Link to={'/login'}><img src={assets.profile_icon}  className='w-5 cursor-pointer' alt='profile_icon' /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <Link to={'/orders'}><p className='cursor-pointer hover:text-black'>Order</p></Link>
                        <Link to={'/login'}><p className='cursor-pointer hover:text-black'>Login</p></Link>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart_icon' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt='menu_icon' className='w-5 cursor-pointer sm:hidden' />
        </div>
        {/* sidebar menu for small screen */}
        <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                    <img className='rotate-180 h-4 cursor-pointer' src={assets.dropdown_icon} />
                    <p>back</p>
                </div>
                <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/'>Home</NavLink>
                <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/collection'>COLLECTION</NavLink>
                <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/about'>ABOUT</NavLink>
                <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar