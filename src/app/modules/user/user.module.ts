import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserRouterModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { RouterModule } from '@angular/router';
import { UserBodyComponent } from './components/user-body/user-body.component';
import { UserSidenavComponent } from './components/user-sidenav/user-sidenav.component';
import { ShowUserApiComponent } from './show-user-api/show-user-api.component';
import { UserTableComponent } from './user-table/user-table.component';



@NgModule({
  declarations: [
    UserHomeComponent,
    UserDashboardComponent,
    UserFooterComponent,
    UserHeaderComponent,
    UserBodyComponent,
    UserSidenavComponent,
    ShowUserApiComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    UserRouterModule,
    FormsModule,
    MaterialsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UserModule { }
