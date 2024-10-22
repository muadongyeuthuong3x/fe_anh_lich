import React from 'react'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import BannerProduct from '../components/BannerProduct'
import { GrSearch } from "react-icons/gr";

const Home = () => {
  return (
    <div>
      <div className='new-product'>Các sản phẩm mới của chúng tôi</div>
      {/* <CategoryList/> */}
      {/* <div className='inputmb-search flex'>
          <input type='text' placeholder='Tìm kiếm sản phẩm' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div> */}
      
      <div className='new-product1'>Các sản phẩm hot</div>
      <BannerProduct/>
      <HorizontalCardProduct />
    </div>
  )
}

export default Home