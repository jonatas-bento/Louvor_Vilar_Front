import { TemplateComponent } from './Cancoes/Template/Template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancoesComponent } from './Cancoes/Cancoes.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cancoes', component: CancoesComponent, pathMatch: 'full' },
  { path: 'cancoes/:id', component: TemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
