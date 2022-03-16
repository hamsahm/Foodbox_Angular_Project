import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category.model';
import { CategoryService } from 'src/app/category.service';
import { Food } from 'src/app/food.model';
import { FoodService } from 'src/app/food.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {

    this.categories = [];
    this.categories = this.categoryService.getCategories();

    console.log("this.categories.length >>>"+this.categories.length)

    this.foods = [];
    // calling food items for category 0 on click on init
    this.foods = this.categoryService.getFoodsByCategory(0);

  }

  getFoodsByCategory(categoryId: number) {
    this.foods = this.categoryService.getFoodsByCategory(categoryId);
  }

  addToCart(food: Food) {

    this.foodService.cartItems.push(food);

  }
}
