import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeSrv: RecipesService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(map => {
      if (!map.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId = map.get('recipeId');
      this.recipe = this.recipeSrv.getRecipeById(recipeId);
    });
  }

}
