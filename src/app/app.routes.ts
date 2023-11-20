import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'student',loadComponent:()=>import('./student-list/student-list.component').then((c)=>c.StudentListComponent)},
    {path:'about',component:AboutComponent},
    {path:'blogs',component:BlogsComponent},
    {path:'',redirectTo:'/home',pathMatch:'full' },
    {path:'auth',loadChildren:()=>import('./auth/auth.route')}
];
