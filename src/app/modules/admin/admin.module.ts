import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './table/details/details.component';
import { SharedModule } from "../../shared/shared.module";
import { EditComponent } from './table/edit/edit.component';


@NgModule({
    declarations: [
        AdminDashboardComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BodyComponent,
        SidenavComponent,
        TableComponent,
        DetailsComponent,
        EditComponent,
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        MaterialsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule
    ]
})
export class AdminModule { }
