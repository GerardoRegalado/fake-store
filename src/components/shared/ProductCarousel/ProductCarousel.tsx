import React from 'react';
import './ProductCarousel.css'
import ProductCardComponent from '../ProductCard/ProductCard.tsx';
import { ProductCarouselProps } from '../../../libs/types.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

function ProductCarousel({category, products}: ProductCarouselProps) {
  return (
    <>
      <div className="category">
        {/*   👇🏻 Solid black diamond. */}
        <h2> &#x2666; {category}</h2>
      </div>
      <section className='carousel'>
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10} 
          slidesPerView={4} 
          navigation
          pagination = {{clickable: true}}
        >
          {products.map(product => (
              <SwiperSlide key={product.id} className='item'>
                <div className="product-card">
                  <ProductCardComponent product={product}/>
                </div>
              </SwiperSlide>
            
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default ProductCarousel