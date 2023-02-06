import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGenericComponent } from './details-generic.component';

describe('DetailsGenericComponent', () => {
  let component: DetailsGenericComponent;
  let fixture: ComponentFixture<DetailsGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
