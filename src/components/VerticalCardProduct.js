import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'

const VerticalCardProduct = ({category, heading}) => {
    const [data,setData] = useState([])
    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       fetchUserAddToCart()
    }

    const fetchData = async() =>{
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])




    return (
        <div className='container mx-auto px-4 my-6 relative'>
      
        </div>
      );
}

export default VerticalCardProduct