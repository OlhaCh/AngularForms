import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicformComponent } from './basicform/basicform.component';

const routes: Routes = [
{
  path: '',
  component: BasicformComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
