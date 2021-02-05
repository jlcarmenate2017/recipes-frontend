import {Injectable} from '@angular/core';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }


  getRecipes() {
    this.http.get(environment.url + '/recipe/all').pipe(map((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    })).subscribe();
  }
}
