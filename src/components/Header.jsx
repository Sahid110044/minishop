import {React,useState} from 'react'
import {Navbar,Container, FormControl,Dropdown, Badge, Form, Button,Card} from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { removetocart, searchItem, sortingItem } from '../Features/Counterslice'
import { FiDelete, FiSearch } from 'react-icons/fi'






function Header() {

  const rendercard = useSelector((state)=>state.cartlist.card)
  const dispatch = useDispatch()
  console.log(rendercard)

    const [quary,setquary] = useState("")

    const handlesubmit = (e)=>{
      e.preventDefault(); //prevent page reload
      if(quary === ""){
        dispatch(searchItem(""));
      }
      dispatch(searchItem(quary))
    }

    const location = useLocation()
    const pagetext = location.pathname === '/'?"Home":"Go-Back"

  return (
    
       <Navbar>
          <Container className='border border-1 py-2' style={{backgroundColor:"#f5f5f5"}}> 
             <Navbar.Brand>
                                                                  {/* here i am dispatching both the clearing search and sorting back to normal */}
             <Link to='/' className='text-decoration-none text-warning' onClick={()=>dispatch(searchItem(""),dispatch(sortingItem("")))}>{pagetext}</Link>

             </Navbar.Brand>
             <Form onSubmit={handlesubmit} className='d-flex justify-content-center align-items-center'>
               <FormControl 
               placeholder='Search'
               value={quary}
               onChange={(e)=>setquary(e.target.value)}
               />
                 <Button type="submit" variant="outline-secondary" className="border rounded-1">
                  <FiSearch className="" />
                </Button>
             </Form>
             <Dropdown  title="Dropdown" variant="light">
              <Dropdown.Toggle className='bg-warning'>
              <FaShoppingCart/>
              <Badge className='bg-warning'>{rendercard.length}</Badge> 
              </Dropdown.Toggle>
              
              <Dropdown.Menu style={{marginLeft:"-80px"}}>
                <span>{rendercard.map((prod)=>(
                  <Card key={prod.id} className='flex flex-row align-items-center border-0'>
                     <Link to='/payloaditems'>
                     <Card.Img variant='top' src={prod.image} style={{width:"80px"}}/>
                     </Link>
                     <FiDelete style={{fontSize:"40px",marginLeft:"20px"}} onClick={()=>dispatch(removetocart(prod))}>Remove</FiDelete>
                  </Card>
                ))}
                </span>
              </Dropdown.Menu>

            </Dropdown>
          </Container>
       </Navbar>
  )
}

export default Header