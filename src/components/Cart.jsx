import Button from 'react-bootstrap/Button';
import {Card,Col,Row} from 'react-bootstrap';

import { React,useState,useEffect } from 'react';
import Singlecart from './Singlecart';
import { useDispatch, useSelector } from 'react-redux';

import Mycategory from './Mycategory';



function Cart() {

 const dispatch =  useDispatch()

    const [product,setproduct] = useState([])
    const [loading,setloading] = useState(true)


  

//-------------------------------------------------------------------------------------
   //search quary is here .. 2go to header then 3go to counterslice
   const search = useSelector((state)=>state.cartlist.search)
   const sorting = useSelector((state)=> state.cartlist.sorting)

   //-------------------------------------------------------------------------------------

   const newfilterproduct = ()=>{

     let filterproduct = product

     if(search){
      filterproduct =  filterproduct.filter((prod)=>prod.title.toLowerCase().includes(search))
     }

     if(sorting){
      filterproduct = filterproduct.filter((prod)=>prod.category.toLowerCase().includes(sorting))
     }

    return filterproduct

  }

//-------------------------------------------------------------------------------------
    const url = 'https://fakestoreapi.com/products'
    useEffect(()=>{

      const cashedproducts = localStorage.getItem("product");

      if(cashedproducts){

        setproduct(JSON.parse(cashedproducts));
        setloading(false)

      }else{

        const datafetching = async()=>{

        try{

          const response = await fetch(url)
          if(!response) throw Error(`Shahid data is corrupted: ${response.status}`)
          const data = await response.json()
          setproduct(data)
          dispatch(addtoitems(data))
          localStorage.setItem("product",JSON.stringify(data));
          setloading(false)
        }
        
        catch(error){

          console.log(error)

        }
        }
        datafetching();
        
      }

    },[url,dispatch])
//----------------------------------------------------------------

    if(loading){
      return <h1>loading...</h1>
    }


    if(!product.length){
      console.log("sorry no data is found")
    }
   

  

  return (
    <div className='container border py-5' style={{backgroundColor:""}}>

     <Row className='gap-5 d-flex justify-content-center'>
       
       <Mycategory product={product}/>
      {newfilterproduct().map((prod)=>(
  
       <Singlecart key={prod.id} prod={prod}/>

      ))}

     </Row>

    </div>
  )
}

export default Cart