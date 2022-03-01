import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category.model';
import { CategoryService } from 'src/app/category.service';
import { Food } from 'src/app/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];
  foods:Food[] = [];
  
  constructor(private categoryService: CategoryService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    const categoryId = +this.route.snapshot.params['id'];
    console.log("inside home component get food by category")
    this.categories = this.categoryService.getCategories();
    this.foods = this.categoryService.getFoodsByCategory(categoryId);
    
  }

  getFoodByCategory(){
    console.log("inside home component get food by category")
      
  }
}
