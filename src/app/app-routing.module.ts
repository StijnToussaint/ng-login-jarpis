import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './services/auth-guard.service';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"private-home",
    component:PrivateHomeComponent,
    canActivate: [AuthGuard],
  },  
  {
    path: "private-home/:id/update",
    component:UserUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "private-home/:id",
    component:UserDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
