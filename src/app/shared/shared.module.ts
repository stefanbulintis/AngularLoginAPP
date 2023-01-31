import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabelGenericComponent } from './tabel-generic/tabel-generic.component';
import { MaterialsModule } from './materials/materials.module';
import { DetailsGenericComponent } from './details-generic/details-generic.component';
import { EditGenericComponent } from './edit-generic/edit-generic.component';
import { AddButtonGenericComponent } from './add-button-generic/add-button-generic.component';
import { BackButtonGenericComponent } from './back-button-generic/back-button-generic.component';
import { DialogGenericComponent } from './dialog-generic/dialog-generic.component';

@NgModule({
 declarations: [
    TabelGenericComponent,
    DetailsGenericComponent,
    EditGenericComponent,
    AddButtonGenericComponent,
    BackButtonGenericComponent,
    DialogGenericComponent
  ],
 imports: [
   CommonModule,
   RouterModule,
   MaterialsModule,
   ReactiveFormsModule
 ],
 exports: [
  CommonModule,
  RouterModule,
  TabelGenericComponent,
  TabelGenericComponent,
  DetailsGenericComponent,
  EditGenericComponent,
  AddButtonGenericComponent,
  BackButtonGenericComponent
 ]
})
export class SharedModule { }
