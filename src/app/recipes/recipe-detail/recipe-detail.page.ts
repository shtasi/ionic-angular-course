import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
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

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Delete the recipe',
      message: 'Are you sure?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: () => {
            this.recipeSrv.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        },
      ]
    }).then((alert => {
      alert.present();
    }));
  }

}
