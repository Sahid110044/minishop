import React, { useEffect, useState } from 'react'
import { Button,Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { sortingItem } from '../Features/Counterslice';





function Mycategory({product}) {

   const dispatch = useDispatch();

   const [show,setshow] = useState(false)

   useEffect(()=>{

    const showitem = setTimeout(() => setshow(true), 1000);
    const hideitem = setTimeout(()=> setshow(false), 5000)  

    return ()=>{
      clearTimeout(showitem);
      clearTimeout(hideitem);
    }
   },[])
  
  return (
    <div className='d-flex flex-column align-items-center '>

     {show &&  <Alert className=' w-50 bg-info-subtle'>Please use AddtoCard and click on the corner cataloge image</Alert>}

       <div className="d-flex flex-wrap justify-content-center">
       <Button variant='outline-warning' className='text-dark' onClick={()=>dispatch(sortingItem(""))}>Clear Filter</Button>
       <Button variant='outline-warning' className='text-dark' onClick={()=>dispatch(sortingItem("jewelery"))}>jewelery</Button>
       <Button variant='outline-warning' className='text-dark' onClick={()=>dispatch(sortingItem("electronics"))}>electronics</Button>
       <Button variant='outline-warning' className='text-dark' onClick={()=>dispatch(sortingItem("women's clothing"))}>women's clothing</Button>
       <Button variant='outline-warning' className='text-dark' onClick={()=>dispatch(sortingItem("men's clothing"))}>men's clothing</Button>
       </div>

    </div>
  )
}

export default Mycategory