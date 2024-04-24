
import { Product } from "./types";

export interface CartItem extends Product {
  qty: number;
}

export interface CartState {
  cart: CartItem[];
  total: number;
}

export interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: Product;
}

export interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART';
  payload: number;
}

export interface AdjustQtyAction {
  type: 'ADJUST_QTY';
  payload: {
    id: number;
    qty: number;
  };
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | AdjustQtyAction;
