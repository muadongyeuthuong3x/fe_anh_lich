import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Tủ"} heading={"Tủ"}/>
      <HorizontalCardProduct category={"Bàn"} heading={"Bàn"}/>

      <VerticalCardProduct category={"Ghế"} heading={"Ghế"}/>
      <VerticalCardProduct category={"Giường"} heading={"Giường"}/>
    </div>
  )
}

export default Home