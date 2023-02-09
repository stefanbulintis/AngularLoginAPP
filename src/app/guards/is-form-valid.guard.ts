import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddInfoComponent } from '../shared/Components/add-info/add-info.component';

@Injectable({
  providedIn: 'root'
})
export class IsFormValidGuard implements CanDeactivate<AddInfoComponent> {
  constructor(){}
  canDeactivate(
    component: AddInfoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.isFormValid
      ? true
      : window.confirm('You have unsaved changes. Leave?');
  }
}
