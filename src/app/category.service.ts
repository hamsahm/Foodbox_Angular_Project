import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [];
  foods: Food[] = [];
  categoryName: string = "";

  constructor(private http: HttpClient) { }

  getCategories() {

    this.foods = []
    let resp = this.http.get<Category[]>(`http://localhost:8080/categories`);

    resp.subscribe(data => {
      data.forEach(category =>
        this.categories.push(new Category(category.categoryId, category.categoryName, category.categoryDescription))
      )

    }
    )

    return this.categories;
  }


  getFoodsByCategory(categoryId: number): Food[] {

    this.foods = []
    this.categories.find(category => {

      if (category.categoryId === categoryId) {
        this.categoryName = category.categoryName;
        let resp = this.http.get<Food[]>(`http://localhost:8080/foods?categoryName=${category.categoryName}`);

        resp.subscribe(data => {
          data.forEach(food =>
            this.foods.push(new Food(food.foodId, food.foodName, food.price, food.imageUrl, food.category, food.description, food.offers))

          )
        }
        )
      }


    })

    return this.foods

  }

}