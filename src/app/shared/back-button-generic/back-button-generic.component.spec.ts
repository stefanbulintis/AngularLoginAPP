import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonGenericComponent } from './back-button-generic.component';

describe('BackButtonGenericComponent', () => {
  let component: BackButtonGenericComponent;
  let fixture: ComponentFixture<BackButtonGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
