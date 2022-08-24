import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'about-us', component:AboutUsComponent},
  {
    path: 'auth', 
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x)=> x.AuthModule)
  },
  {
    path: 'public', 
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then((x)=> x.PublicModule)
  },
  {
    path: 'user', 
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then((x)=> x.UserModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
