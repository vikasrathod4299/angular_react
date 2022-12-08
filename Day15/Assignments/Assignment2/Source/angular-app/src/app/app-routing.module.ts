import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { ListComponent } from './list/list.component';
import { UserGuard } from './user.guard';

const routes: Routes = [{path:'product',children:[{path:'list',canActivate:[UserGuard],component:ListComponent},
                                                  {path:'add', component:AddComponent , canActivate:[AdminAuthGuard]}]}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }