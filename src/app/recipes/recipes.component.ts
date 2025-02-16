import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  imports: [RouterOutlet, RecipeListComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  constructor() {}
}
