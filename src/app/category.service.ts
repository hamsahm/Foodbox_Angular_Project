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

  constructor(private http: HttpClient) { }

  getCategories(){

    this.categories = [new Category(1,"Indian","Indian foods"),
    new Category(2,"Italian","Italian foods")]
    return this.categories;
  }

  getFoodsByCategory(categoryId: number): Food[]{

    console.log("inside foods category service to fetch foods")

    this.categories.find(category => {

      if(category.categoryId === categoryId){
        let resp = this.http.get(`http://localhost:8080/foods?categoryName=${category.categoryName}`);
        resp.forEach( data => {
          console.log(data)
          
        } )

      }
    })

  return this.foods;
  }


}