import React, { useContext, useState } from 'react'

import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery)

  const dataLocal = JSON.parse(localStorage.getItem("role_web"))
  const handleLogout = async () => {
    localStorage.removeItem("role_web")
    localStorage.removeItem("role_web")
    navigate("/login")
  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)

    if (value) {
      navigate(`/search?q=${value}`)
    } else {
      navigate("/search")
    }
  }
  return (
    <div className='header-web'>
      <header className='h-16 shadow-md bg-white fixed w-full z-40'>
        <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
          <div className=''>
            <Link to={"/"}>
              <img src="./logo.jpg" alt="Logo web" className='logog-web w-[90px] h-[50px] ' />
            </Link>
          </div>

          <div className='flex'>
          <Link to={"/introduce"} className='link_me'> Giới thiệu </Link>
            <Link to={"/service"} className='link_me'> Các gói dịch vụ </Link>
           
            <Link to={"/service-1"} className='link_me'> Liên hệ </Link>
          </div>

          <div className='flex items-center   '>
            <div className='relative flex justify-center'>
              {
                user?._id && (
                  <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(preve => !preve)}>
                    {
                      user?.profilePic ? (
                        <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                      ) : (
                        <FaRegCircleUser />
                      )
                    }
                  </div>
                )
              }


              {
                menuDisplay && (
                  <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                    <nav>
                      {
                        user?.role === ROLE.ADMIN && (
                          <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                        )
                      }

                    </nav>
                  </div>
                )
              }

            </div>

            {
              user?._id && (
                <Link to={"/cart"} className='text-2xl relative'>
                  <span><FaShoppingCart /></span>

                  <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p className='text-sm'>{context?.cartProductCount}</p>
                  </div>
                </Link>
              )
            }



            <div className='button_login_app'>
              {
                dataLocal ? (
                  <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Đăng xuất</button>
                )
                  : (
                    <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Đăng nhập</Link>
                  )
              }

            </div>

          </div>

        </div>
      </header>
    </div>

  )
}

export default Header