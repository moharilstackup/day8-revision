import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category.component';
import { CharacterComponent } from './components/character.component';
import { CharacterDetailComponent } from './components/character-detail.component';
import { PageNotFoundComponent } from './components/page-not-found.component';


const routes: Routes = [
    // { path: '', component: CategoryComponent},
    { path: '', redirectTo: '/category', pathMatch: 'full'},
    { path: 'category', component: CategoryComponent },
    { path: 'character', component: CharacterComponent},
    { path: 'characterDetail', component: CharacterDetailComponent},
    { path: 'characterDetail/:charName', component: CharacterDetailComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }