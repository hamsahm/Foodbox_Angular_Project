import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Food } from 'src/app/food.model';
import { FoodService } from 'src/app/food.service';
import { Order } from 'src/app/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  hidden: Boolean = false;
  totalPrice: number = 0;
  foods: Food[] = [];
  uploadForm: FormGroup | undefined;  

  constructor(private foodService: FoodService,private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.foods = this.foodService.getCartItems();

    for (var food of this.foods) {
      this.totalPrice = this.totalPrice + food.price;
    }
  }

  placeOrder(foods: Food[], totalAmount:number){
    
console.log(" on click on place order");
console.log(" on click on place order"+foods.length);
console.log(" on click on place order"+totalAmount);
   const url = 'http://localhost:8080/orders';
   
   const headers = { 'content-type': 'application/json'}  
   let jsonObj = {
     'orderAmount': totalAmount
   }
   const body=JSON.stringify('"orderAmount":'+totalAmount);
   console.log(" on click on place order"+body);

    this.http.post<Order>(url, jsonObj,{'headers':headers}).subscribe(
      (res) => {
        console.log(" res orderAmount>>>>>>>>>>"+res.orderAmount)
        console.log(" res orderId>>>>>>>>>>"+res.orderId)
        alert(" The order placed successfully with order Id: "+res.orderId);

      },
      (err) => {
        console.log("err >>>>>>>>"+err)
        alert(" The order was not placed due to some error");
      } 
   );
  
    
}

}
