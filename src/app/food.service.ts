import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  cartItems: Food[] = []
  
  constructor() { }


  setCartItems(cartItems: Food[]){
    this.cartItems = cartItems;
}

getCartItems(): Food[] {
  return this.cartItems
  }
}
