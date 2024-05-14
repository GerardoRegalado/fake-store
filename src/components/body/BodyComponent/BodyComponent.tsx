import './BodyComponent.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import ProductCarousel from '../../shared/ProductCarousel/ProductCarousel.tsx';
import { Product } from '../../../libs/types.ts';


function BodyComponent() {
  const URL = 'https://fakestoreapi.com/products'; //API URL to get dummy store data.
  const [products, setProducts] = useState<Product[]>([]); //State for products
  const [loading, setLoading ] = useState(true); //State for loading.

  const fetchProducts = async () => {
    const response = await axios.get(URL);
    const data = response.data;
    console.log(data)
    setProducts(data);
    setLoading(false);
  }

  const filterProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  return (
    <>
      <div className="title">
        <h1>Fake Store</h1>
      </div>
      <section className='body-store'>
        <ProductCarousel category="Men's Clothing" products={filterProductsByCategory("men's clothing")}/><hr/>
        <ProductCarousel category="Women's Clothing" products={filterProductsByCategory("women's clothing")}/><hr/>
        <ProductCarousel category="Jewelery" products={filterProductsByCategory("jewelery")}/><hr/>
        <ProductCarousel category="Electronics" products={filterProductsByCategory("electronics")}/><hr/>
      </section>

    </>
  )
}

export default BodyComponent