import React, { useState } from 'react';
import './HeaderComponent.css';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IoCartOutline } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdCircle } from "react-icons/md";



import { adjustQty, removeFromCart } from '../../../redux/reducers/cartReducer.ts';

function HeaderComponent() {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: number) => {
    event.stopPropagation()
    dispatch(removeFromCart(id));
  }

  const handleQtyChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number, qty: number) => {
    event.stopPropagation()
    dispatch(adjustQty({id, qty}))
  }
  return (
    <>
      <Navbar className='navbar' style={{backgroundColor:'#509BE0'}}>
            <Container>
                <Navbar.Brand href="#home" className='title-header'>Fake Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Hot Products</Nav.Link>
                    <Nav.Link href="#pricing">Sales</Nav.Link>
                </Nav>
                { cartItems.length > 0 ? (<MdCircle className='notif-icon'/> ) : '' }
                <NavDropdown
                  align="end" 
                  title={<IoCartOutline size={24} style={{position: 'relative', display: 'inline-block'}}/>}
                  show={dropdownVisible}
                  onToggle={(isOpen) => setDropdownVisible(isOpen)}
                  id="basic-nav-dropdown">
                        {cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <NavDropdown.Item key={item.id} className='nav-dropdown-item' >
                                    <div style={{ display: 'flex', alignItems: 'center', width:'30vw', whiteSpace: 'normal', outline: 'none'}}>
                                      <Button 
                                        onClick={(event) => handleRemove(event, item.id)}
                                        style={{backgroundColor: 'transparent', border: '1px solid red'}}>
                                          <MdDelete style={{ color: 'red' }} />
                                      </Button>
                                        <img src={item.image} style={{width: '15%', margin: '1vw'}} alt="Does not work" />
                                        <div className='cart-details'>
                                            <p>{item.title} </p>
                                            <p>Price: ${item.price} </p>
                                            <p>
                                                Qty: 
                                                <Button style={{backgroundColor: 'transparent', border: 'none', color: 'black'}}  onClick={(event) => handleQtyChange(event, item.id, item.qty - 1)}> <IoIosRemoveCircleOutline /> </Button>

                                                  {item.qty} 

                                                <Button style={{backgroundColor: 'transparent', border: 'none', color: 'black'}} onClick={(event) => handleQtyChange(event,item.id, item.qty + 1)}> <IoIosAddCircleOutline /> </Button>

                                            </p>
                                            <span>Subtotal :${item.price * item.qty} </span>
                                        </div>
                                    </div>
                                    <hr/>
                                </NavDropdown.Item>
                            ))
                        ) : (
                            <NavDropdown.Item>No items in cart</NavDropdown.Item>
                        )}
                        <NavDropdown.Divider />
                        <NavDropdown.Item disabled>
                            Total: ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
                        </NavDropdown.Item>
                    </NavDropdown>
            </Container>
        </Navbar>
    </>
  )
}

export default HeaderComponent