import React, { useState } from 'react'
import { ProductCardProps } from '../../../libs/types'
import { Card, Button, Modal, Col, Row } from 'react-bootstrap'

function ProductCardComponent({product}: ProductCardProps) {
    const [show, setShow] = useState(false);

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
                </div>
                <Button variant="warning" onClick={handleShow}>Buy</Button>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton style={{background: 'linear-gradient(90deg,#f87293,#f9b78b)'}}>
                    <Modal.Title>Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <img src={product.image} className='product-image' style={{ padding: '5vw 1vw',margin: '3vw',width: '75%', height: 'auto', objectFit: 'cover', border:'dashed 1px black'}} alt={product.title} />
                        </Col>
                        <Col xs={12} md={6} className="text-center justify-content-center">
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <h5>${product.price}</h5>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="warning" onClick={() => {
                        console.log("Add to cart: ", product.title);
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