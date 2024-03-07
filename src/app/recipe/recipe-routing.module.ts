import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';


const routes: Route[] = [
  { path: '', redirectTo: 'allRecipe', pathMatch: 'full' },
  { path: 'allRecipe', component:AllRecipesComponent },
  { path: 'smallRecipe', component:SmallRecipeComponent },
  { path: 'addRecipe', component:AddRecipeComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class  recipeRoutingModule{}