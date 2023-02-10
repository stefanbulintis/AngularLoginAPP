import { BrowserModule } from '@angular/platform-browser';
import { AddInfoComponent } from 'src/app/shared/Components/add-info/add-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabelGenericComponent } from './Components/tabel-generic/tabel-generic.component';
import { MaterialsModule } from './materials/materials.module';
import { DetailsGenericComponent } from './Components/details-generic/details-generic.component';
import { EditGenericComponent } from './Components/edit-generic/edit-generic.component';
import { AddButtonGenericComponent } from './Buttons/add-button-generic/add-button-generic.component';
import { BackButtonGenericComponent } from './Buttons/back-button-generic/back-button-generic.component';
import { DialogGenericComponent } from './dialog-generic/dialog-generic.component';
import { ChartGenericComponent } from './Components/chart-generic/chart-generic.component';

@NgModule({
 declarations: [
    TabelGenericComponent,
    DetailsGenericComponent,
    EditGenericComponent,
    AddButtonGenericComponent,
    BackButtonGenericComponent,
    DialogGenericComponent,
    ChartGenericComponent,
  ],
 imports: [
   CommonModule,
   RouterModule,
   MaterialsModule,
   ReactiveFormsModule,

 ],
 exports: [
  CommonModule,
  RouterModule,
  TabelGenericComponent,
  TabelGenericComponent,
  DetailsGenericComponent,
  EditGenericComponent,
  AddButtonGenericComponent,
  BackButtonGenericComponent,
 ]
})
export class SharedModule { }
