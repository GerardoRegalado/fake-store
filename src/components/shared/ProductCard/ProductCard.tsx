import React, { useState } from 'react'
import { ProductCardProps } from '../../../libs/types'
import { Card, Button, Modal, Col, Row } from 'react-bootstrap'
import { addToCart } from '../../../redux/reducers/cartReducer.ts';
import { useDispatch } from 'react-redux'
import RatingComponent from '../Rating/RatingComponent.tsx';

function ProductCardComponent({product}: ProductCardProps) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card style={{ width: '18rem', height: '380px', display: 'flex', flexDirection: 'column', margin: 'auto' }}>
            <Card.Img variant="top" src={product.image} style={{ height: '180px', objectFit: 'contain', width: '100%' }} />
            <Card.Body style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <Card.Title style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                        {product.title}
                    </Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <RatingComponent rating={product.rating}/>
                </div>
                <Button variant="warning" onClick={handleShow}>Buy</Button>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton style={{background: 'linear-gradient(90deg,#f87293,#f9b78b)', fontFamily: "Permanent Marker"}}>
                    <Modal.Title className='modal-title'>Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="align-items-center">

                        <Col xs={12} md={6}>
                            <h4 style={{marginLeft: '3vw'}}>{product.title} </h4>
                            <div style={{marginLeft: '3vw'}}>
                            <h5>${product.price}</h5>
                                <RatingComponent rating={product.rating}/>
                            </div>
                            <img src={product.image} className='product-image' style={{ padding: '5vw 1vw',margin: '3vw',width: '75%', height: 'auto', objectFit: 'cover', border:'dashed 1px black'}} alt={product.title} />
                        </Col>
                        <Col xs={12} md={6} className="text-center justify-content-center">
                            <h4>Description: </h4>
                            <p>{product.description}</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="warning" onClick={() => {
                        dispatch(addToCart(product))
                        handleClose();
                    }}>
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default ProductCardComponent