import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',

  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  public subscription: Subscription = new Subscription();

  public addSubscription(subscription: Subscription): void {
    this.subscription.add(subscription);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
