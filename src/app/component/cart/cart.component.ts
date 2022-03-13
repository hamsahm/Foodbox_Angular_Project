import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/food.model';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  hidden: Boolean = false;
  totalPrice: number = 0;
  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getCartItems();


    for (var food of this.foods) {
      this.totalPrice = this.totalPrice + food.price;
    }
  }

  placeOrder(): void{
    
    alert(" The order placed successfully");
}

}
