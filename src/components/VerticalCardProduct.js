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
          <h2 className='text-2xl font-semibold py-4'>{heading}</h2>
      
          <div className='grid grid-cols-12 gap-6'> {/* Thêm gap cho các sản phẩm */}
            {data.map((product, index) => {
              return (
                <Link
                  key={product?._id} // Thêm key để nhận diện phần tử
                  to={"product/" + product?._id}
                  className="col-span-6 md:col-span-3 h-72 bg-white rounded-sm shadow"
                >
                  <div>
                    <img
                      src={product.productImage[0]}
                      alt={product.productName}
                      className="object-cover h-40 w-full hover:scale-110 transition-all"
                    />
                    <div className="mt-2 pl-5 pr-5 h-32">
                      <p className="text-black font-medium text-xs lg:text-lg h-16">
                        {product.description.length > 50
                          ? product.description.slice(0, 50) + "..."
                          : product.description}
                      </p>
                      <div className="flex mt-1 justify-between h-8">
                        <p className="text-red-600 font-medium text-xs pr-2">
                          {(product?.sellingPrice).toLocaleString("en-US")} VNĐ
                          (
                          <span className="text-slate-500 line-through text-xs">
                            {(product?.price).toLocaleString("en-US")} VNĐ
                          </span>
                          )
                        </p>
                        <button
                          className="text-sm bg-black hover:bg-red-700 text-white px-3 py-0.5 h-6 rounded-full w-auto"
                          onClick={(e) => handleAddToCart(e, product?._id)}
                        >
                          <FaShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                 
                </Link>
              );
            })}
          </div>
        </div>
      );
}

export default VerticalCardProduct