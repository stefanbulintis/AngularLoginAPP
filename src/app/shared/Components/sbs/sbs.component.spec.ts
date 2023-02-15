import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBSComponent } from './sbs.component';

describe('SBSComponent', () => {
  let component: SBSComponent;
  let fixture: ComponentFixture<SBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
