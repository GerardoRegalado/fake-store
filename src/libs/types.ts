export type Product = {
    category: string,
    description: string,
    id: number,
    price: number,
    rating: Rating,
    title: string,
    image: string
  }
  
  export type Rating = {
    rate: number,
    count: number,
  }
  
  export enum productTypes {
    MENS_CLOTHING = "men's clothing",
    WOMEN_CLOTHING = "women's clothing",
    JEWELERY = "jewelery",
    ELECTRONICS = "electronics"
  }
  
  export interface ProductCarouselProps {
    category: string;
    products: Product[];
  }

  export interface ProductCardProps {
    product: Product;
  }