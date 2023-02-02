import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserSidenavComponent } from './components/user-sidenav/user-sidenav.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MoreComponent } from './user-table/more/more.component';
import { DetailsComponent } from '../admin/table/details/details.component';


const routes: Routes = [
  {
    path: '',
    component: UserSidenavComponent,
    children: [
        {
          path: 'user-home',
          component: UserHomeComponent
        },

        {
          path: 'user-table',
          component: UserTableComponent
        },

        {
          path: 'details/:id',
          component: DetailsComponent,
        },

        {
          path: 'user-footer',
          component: UserFooterComponent
        }
  ],
},
{
  path: '**',
  redirectTo: '/user-home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class UserRouterModule { }
