import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from 'src/app/components/add-info/add-info.component';
import { IsFormValidGuard } from 'src/app/guards/is-form-valid.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DetailsComponent } from './table/details/details.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: '',
    component:  SidenavComponent,
    children: [
        {
          path: 'admin',
          component: AdminDashboardComponent
        },

        {
          path: 'table',
          component: TableComponent,
        },
        {
          path: 'details/:id',
          component: DetailsComponent,
        },
        {
          path: 'addInfo',
          component: AddInfoComponent,
          canDeactivate: [IsFormValidGuard]
        },

        {
          path: 'footer',
          component: FooterComponent
        },
    ],
  },
  {
    path: '**',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AdminRoutingModule { }
