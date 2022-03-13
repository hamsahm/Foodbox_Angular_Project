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
    console.log("initof cart components before getting foods");
    this.foods = this.foodService.getCartItems();

    console.log("after getting foods "+this.foods)

    for (var food of this.foods) {
      this.totalPrice = this.totalPrice + food.foodPrice;
    }
  }

  placeOrder(): void{
    alert(" The order placed successfully");
}

}
