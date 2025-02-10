import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Card,Button,} from 'react-bootstrap'
import { addqty, getcardtotal, removeqty, removetocart } from '../Features/Counterslice'
import { FiDelete } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'



function Payloaditems() {

 const navigate =  useNavigate()

 const dispatch = useDispatch()
  
  const {card,totalquantity,totalprice} = useSelector((state)=>state.cartlist)

  useEffect(()=>{
    dispatch(getcardtotal())
  },[card])

  

  return (
    <div className='container'>
      <h1>{card.length > 0 ? "Selected Items":"No Items are Selected"}</h1>
       <Button className='mb-3' onClick={()=>navigate(-1)}>Go-Back</Button>
    <div className="row row-cols-2  d-flex justify-content-between">

     <div className="">
      {card.map((prod)=>(
      <Card key={prod.id} style={{ width: '40rem' }} id='payload' className='d-flex flex-row flex-lg-shrink-0'>
      <Card.Img variant="top" src={prod.image} height={160} className='w-25'/>
      <Card.Body>
        <Card.Title>{prod.title.split(" ").slice(0,1).join(" ")}</Card.Title>
        <Card.Title>Price : {String(prod.price).split(".")[0]}</Card.Title>
        {/* <Card.Text>{prod.description.slice(0,30)}</Card.Text> */}
      </Card.Body>
      <Card.Body className='d-flex align-items-center justify-content-center gap-1 flex-grow-1'>
      <Button onClick={()=>dispatch(addqty(prod.id))}>+</Button>
      <h4>qty : {prod.quantity}</h4>
      <FiDelete onClick={()=>dispatch(removetocart(prod))} className='fs-2'/>
      <Button onClick={()=>dispatch(removeqty(prod.id))} disabled={prod.quantity <= 1}>-</Button>
      </Card.Body>
    </Card>
      ))}
     </div>


    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>TOTAL PRICE AND QTY</Card.Title>
          <h2>Total Price:<span className='text-success'>{totalprice}</span></h2>
          <h2>Total QTY:<span className='text-success'>{totalquantity}</span></h2>
          <Card.Text>
            Hope you find our add to card service convinient 
          </Card.Text>
        </Card.Body>
      </Card>

      </div>


    </div>
  )
}

export default Payloaditems