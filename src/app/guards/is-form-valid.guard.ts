import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddInfoComponent } from '../components/add-info/add-info.component';

@Injectable({
  providedIn: 'root'
})
export class IsFormValidGuard implements CanDeactivate<AddInfoComponent> {
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
