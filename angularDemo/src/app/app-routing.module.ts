import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/listUser', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'addUser', component: AddUserComponent },
  { path: 'listUser', component: ListUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
