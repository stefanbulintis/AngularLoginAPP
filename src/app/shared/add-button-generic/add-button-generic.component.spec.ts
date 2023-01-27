import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonGenericComponent } from './add-button-generic.component';

describe('AddButtonGenericComponent', () => {
  let component: AddButtonGenericComponent;
  let fixture: ComponentFixture<AddButtonGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddButtonGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddButtonGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
