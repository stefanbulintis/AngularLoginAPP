import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserApiComponent } from './show-user-api.component';

describe('ShowUserApiComponent', () => {
  let component: ShowUserApiComponent;
  let fixture: ComponentFixture<ShowUserApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
