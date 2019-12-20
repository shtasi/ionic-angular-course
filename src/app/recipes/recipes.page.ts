import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
