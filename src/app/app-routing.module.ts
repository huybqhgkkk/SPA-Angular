import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PostComponent} from "./post/post.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";



const routes: Routes = [
  {
    // khi đường dẫn là '' thì nó sẽ được tự động gọi đến đường dẫn là '/index'
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  // {
  //   path: 'courses/:id',
  //   component: CourseComponent,
  //   resolve: {
  //     course: CourseResolver
  //   }
  // },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
