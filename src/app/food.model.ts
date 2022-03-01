import { Category } from "./category.model";

export class Food {

    constructor(public foodId:number, public foodName: string, public foodPrice:number, public imageUrl:string,
        public category:Category, public description:string, public offers:string){}
   // foodId:number, foodName: string, 
     //  foodPrice:number, imageUrl:string,
     //    category:Category, description:string,
     // offers:string
    
    
}
