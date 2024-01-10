import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './guard/auth-guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ProductsComponent,
    canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
