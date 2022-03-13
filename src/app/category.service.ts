import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    // config: Config | undefined;
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
    console.log(" inside get foods by category " + categoryId)
    this.categories.find(category => {

      console.log("before if")

      if (category.categoryId === categoryId) {
        console.log("after  if category.categoryId  >>>>>>" + category.categoryId)
        this.categoryName = category.categoryName;
        let resp = this.http.get<Food[]>(`http://localhost:8080/foods?categoryName=${category.categoryName}`);

        resp.subscribe(data => {
          data.forEach(food =>
            this.foods.push(new Food(food.foodId, food.foodName, food.foodPrice, food.imageUrl, food.category, food.description, food.offers))

          )
        }
        )
      }


    })
    console.log("this.foods.length inside service before return>>>> " + this.foods.length)

    return this.foods


  }

}