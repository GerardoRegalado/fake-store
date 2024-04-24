import React from 'react'
import { ProductCardProps } from '../../../libs/types'
import { Card, Button } from 'react-bootstrap'

function ProductCardComponent({product}: ProductCardProps) {
    console.log(product.title)
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
                <Button variant="warning">Buy</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default ProductCardComponent