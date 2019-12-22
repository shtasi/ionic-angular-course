import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'rc1',
      title: 'fluence',
      imageURL: 'https://uran.help/wp-content/uploads/2018/10/Sredstvo-v-originalnoj-upakovke.-Istochnik-samson-pharma.ru_-300x300.png',
      ingridients: ['paracetamol']
    },
    {
      id: 'rc2',
      title: 'cold',
      imageURL: 'http://images-on-off.com/images/145/zhelatin37retseptovzagotovoknazimususeki-a7a4ed0b.jpg',
      ingridients: ['raspberry', 'warm'],
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipeById(id: string): Recipe {
    return {...this.recipes.find(e => e.id === id)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(e => e.id !== recipeId);
  }

}
