import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import DisplayImage from '../components/DisplayImage';
import uploadImage from '../helpers/uploadImage';
import { MdDelete } from "react-icons/md";

const Slider = () => {

    const [data, setData] = useState({
        productImage:  [],
    })

    const [openFullScreenImage,setOpenFullScreenImage] = useState(false)
    const [fullScreenImage,setFullScreenImage] = useState("")

    const handleDeleteProductImage = async(index)=>{
        const newProductImage = [...data.productImage]
        newProductImage.splice(index,1)
    
        setData((preve)=>{
          return{
            ...preve,
            productImage : [...newProductImage]
          }
        })
        
      }

    const handleUploadProduct = async (e) => {
        const file = e.target.files[0]
        const uploadImageCloudinary = await uploadImage(file)



        setData((preve) => {
            return {
                ...preve,
                productImage: [...preve.productImage, uploadImageCloudinary.url]
            }
        })
    }
    
    const saveImageSlider = async () => {
        console.log(1111111,data )
    }
    return (
        <div>
            <h2> Upload ảnh slider</h2>

            <label htmlFor='uploadImageInput'>
                <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                    <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                        <span className='text-4xl'><FaCloudUploadAlt /></span>
                        <p className='text-sm'>Upload Product Image</p>
                        <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
                    </div>
                </div>
            </label>


            <div className='slider-image-admin'>
               {
                 data?.productImage[0] ? (
                     <div className='flex items-center gap-2'>
                         {
                           data.productImage.map((el,index)=>{
                             return(
                               <div className='relative group'>
                                   <img 
                                     src={el} 
                                     alt={el} 
                                     width={80} 
                                     height={80}  
                                     className='bg-slate-100 border cursor-pointer image-anh'  
                                     onClick={()=>{
                                       setOpenFullScreenImage(true)
                                       setFullScreenImage(el)
                                     }}/>

                                     <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handleDeleteProductImage(index)}>
                                       <MdDelete/>  
                                     </div>
                               </div>
                               
                             )
                           })
                         }
                     </div>
                 ) : (
                   <p className='text-red-600 text-xs'>*Vui lòng upload ảnh (bắt buộc)</p>
                 )
               }
               
           </div>

            {
                openFullScreenImage && (
                    <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
                )
            }
        
        <button className='button-save-slider' onClick={saveImageSlider}> Lưu ảnh slider </button>
        </div>
    )

}

export default Slider 