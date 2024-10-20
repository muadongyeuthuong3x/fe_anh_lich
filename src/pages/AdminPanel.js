import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const navigate = useNavigate()
    const dataLoginUser =  JSON.parse(localStorage.getItem('data_login_user')) || {}
    useEffect(()=>{
        const dataLogin = JSON.parse(localStorage.getItem('role_web')) || false
        if(!dataLogin) {
        
            navigate("/")
        }
        const { role_web  } = dataLogin;
        if(role_web !== ROLE.ADMIN){
           navigate("/")
        }
    },[])

  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

        <aside className='bg-white min-h-full  w-full  max-w-60 customShadow'>
                <div className='h-32  flex justify-center items-center flex-col'>
                    <div className='text-5xl cursor-pointer relative flex justify-center'>
                        {
                        dataLoginUser?.profilePic ? (
                            <img src={dataLoginUser?.profilePic} className='w-20 h-20 rounded-full' alt={dataLoginUser?.name} />
                        ) : (
                            <FaRegCircleUser/>
                        )
                        }
                    </div>
                    <p className='capitalize text-lg font-semibold'>{dataLoginUser?.name}</p>
                    <p className='text-sm'>{dataLoginUser?.role}</p>
                </div>

                 {/***navigation */}       
                <div>   
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>Danh sách tài khoản</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>Danh sách sản phẩm</Link>
                        <Link to={"slider"} className='px-2 py-1 hover:bg-slate-100'>Sản phẩm nổi bật</Link>
                    </nav>
                </div>  
        </aside>

        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel