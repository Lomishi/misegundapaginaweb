import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: ''},
{path: 'menu', component: MenuComponent},
{path: 'slider', component: SliderComponent},
{path: 'eventos', component: EventosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
