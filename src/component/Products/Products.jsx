import React from 'react'
import '../Home/Content.css'
import {Button} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
    <div className='container3'>
    <div className='title'> PRODUCTS</div>
    <div className='under-container3'>
         <div className='row1'>
         <img className='rowImg' src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
         <div className='rowContent'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima repudiandae voluptates soluta eum, culpa ipsam, odio deleniti, vel at voluptatem sit vero et quia mollitia porro asperiores reiciendis ut!</span>
         </div>
         <div className='flex justify-center pb-5'>
         <Link to='/contact'>
         <button className='bg-blue-500 text-white px-8 py-3 rounded-lg'>ENQUIRY NOW</button>
         </Link>
          </div>
         </div>
        <div className='row2'>
        <img className='rowImg' src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        <div className='rowContent'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima repudiandae voluptates soluta eum, culpa ipsam, odio deleniti, vel at voluptatem sit vero et quia mollitia porro asperiores reiciendis ut!</span>
         </div>
         <div className='flex justify-center pb-5'>
         <Link to='/contact'>
         <button className='bg-blue-500 text-white px-8 py-3 rounded-lg'>ENQUIRY NOW</button>
         </Link>
          </div>
         </div>
        <div className='row3'>
        <img className='rowImg'  src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        <div className='rowContent'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima repudiandae voluptates soluta eum, culpa ipsam, odio deleniti, vel at voluptatem sit vero et quia mollitia porro asperiores reiciendis ut!</span>
         </div>
         <div className='flex justify-center pb-5'>
         <Link to='/contact'>
         <button className='bg-blue-500 text-white px-8 py-3 rounded-lg'>ENQUIRY NOW</button>
         </Link>
          </div>
          </div>
        <div className='row4'>
        <img className='rowImg'  src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        <div className='rowContent'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima repudiandae voluptates soluta eum, culpa ipsam, odio deleniti, vel at voluptatem sit vero et quia mollitia porro asperiores reiciendis ut!</span>
         </div>
         <div className='flex justify-center pb-5'>
         <Link to='/contact'>
         <button className='bg-blue-500 text-white px-8 py-3 rounded-lg'>ENQUIRY NOW</button>
         </Link>
          </div>
          </div>
        <div className='row5'>
        <img className='rowImg'  src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        <div className='rowContent'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima repudiandae voluptates soluta eum, culpa ipsam, odio deleniti, vel at voluptatem sit vero et quia mollitia porro asperiores reiciendis ut!</span>
         </div>
         <div className='flex justify-center pb-5'>
         <Link to='/contact'>
         <button className='bg-blue-500 text-white px-8 py-3 rounded-lg'>ENQUIRY NOW</button>
         </Link>
          </div>
         </div>
        <div className='row6'>
        <img className='rowImg' src='https://assets.tractorjunction.com/tractor-junction/assets/images/upload/mahindra-arjun-novo-605-dii-4wd-1698917936.webp?format=webp'/>
        <div className='rowContent'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima repudiandae voluptates soluta eum, culpa ipsam, odio deleniti, vel at voluptatem sit vero et quia mollitia porro asperiores reiciendis ut!</span>
         </div>
         <div className='flex justify-center pb-5'>
         <Link to='/contact'>
         <button className='bg-blue-500 text-white px-8 py-3 rounded-lg'>ENQUIRY NOW</button>
         </Link>
          </div>
         </div>
    </div>
    </div>
    </>
  )
}
export default Products