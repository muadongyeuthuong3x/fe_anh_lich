import React , { useEffect , useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import scrollTop from '../helpers/scrollTop'
import displayINRCurrency from '../helpers/displayCurrency'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function HorizontalCardProduct() {
  const [value, setValue] = React.useState(0);
  const [dataCategory , setCategory] = useState([])
  const [categorys, setCategorys] = useState([]);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    const idCategory = categorys[newValue]._id;

    const responseProduct = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/${idCategory}`);
    setCategory(responseProduct.data.data)
  };


   
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/category`);
        setCategorys(response.data.data);
        const idCategory = response.data.data[0]._id;

        const responseProduct = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/${idCategory}`);
        setCategory(responseProduct.data.data)

      } catch (error) {
        toast.error("Server error ")
      }
    };

    getCategories();
  }, []);
  

  const handleAddToCart = () =>{

  }

  return (
    <Box className="container mx-auto mt-5 pb-5">
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
          categorys.length > 0 && categorys.map((e) => (
            <Tab 
            key={e._id} 
            label={e.categortyName}
            className="font-bold text-xl"
          />
          ))
          }
        </Tabs>
      </div>

      {
  categorys.length > 0 && categorys.map((e, index) => (
    <TabPanel key={index} value={value} index={index}>
     <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-auto scrollbar-none transition-all'>
        {dataCategory.map((product) => {
          return (
            <Link 
              key={product?._id} // Add a unique key for each Link
              to={`/product/${e?._id}/${product?._id}`} 
              className='w-full min-w-[280px] md:min-w-[300px] max-w-[280px] md:max-w-[300px] bg-white rounded-sm shadow' 
              onClick={scrollTop}
            >
              <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                <img src={product?.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
              </div>
              <div className='p-4 grid gap-3'>
                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                <p className='capitalize text-slate-500'> Kích cỡ : {product?.brandName}</p>
                <div className='flex gap-3'>
                  <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                  <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                </div>
                <button 
                  className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' 
                  onClick={(e) => handleAddToCart(e, product?._id)}
                >
                  Mua sản phẩm
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </TabPanel>
  ))
}

    </Box>
  );
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};
