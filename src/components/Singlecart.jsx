import React from 'react'
import {Card,Col,Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from '../Features/Counterslice'

function Singlecart({prod}) {
    
    const {id,title,price,description,category,image,rating} = prod

   const selector =  useSelector((state)=>state.cartlist.card)
    console.log(selector)
   const dispatch = useDispatch()

  return (
    <>
     <Col xs={12} sm={6} md={4} lg={3} >

            <Card style={{ width: '18rem', }} className='shadow'>
            <Card.Img variant="top" src={image} height={200} className='pt-1'/>
            <Card.Body>
            <Card.Title className=''>{title.split(" ").slice(0,3).join(" ")}</Card.Title>
            <Card.Text>
            {description?description.slice(0,80):"no description"}
            </Card.Text>
            <Button variant="outline-warning" className='border  border-warning ' onClick={()=>dispatch(addtocart(prod))}>Add to Cart</Button>
            </Card.Body>
            </Card>

     </Col>
    </>
  )
}

export default Singlecart