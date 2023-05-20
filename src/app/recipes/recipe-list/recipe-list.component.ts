import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('The Name', 'The desc', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'),
    new Recipe('The Name', 'The desc', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'),
  ];
  constructor() {}


}
