import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category.model';
import { CategoryService } from 'src/app/category.service';
import { Food } from 'src/app/food.model';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];
  foods:Food[] = [];
  
  constructor(private categoryService: CategoryService,private route: ActivatedRoute, private foodService:FoodService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();

// calling food items for category 0 on click on init
   this.foods = this.categoryService.getFoodsByCategory(0);
    
  }

  getFoodsByCategory(categoryId: number){
    console.log(" on click on food category ")
    this.foods = this.categoryService.getFoodsByCategory(categoryId);

    console.log("this.foods.length >>>>>>>"+this.foods.length)

  }

  addToCart(food: Food){
    console.log(" On click on add to cart");
    console.log(" On click on add to cart food.foodName >>>>>>>>"+food.foodName);

    console.log(" On click on add to cart food.foodPrice >>>>>>>>>>"+food.foodPrice);
    this.foodService.cartItems.push(food);

    console.log("After pushing food into cart");

  }
}
