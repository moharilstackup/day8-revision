import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category.component';
import { CharacterComponent } from './components/character.component';


const routes: Routes = [
    { path: 'category', component: CategoryComponent },
    { path: 'character', component: CharacterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }