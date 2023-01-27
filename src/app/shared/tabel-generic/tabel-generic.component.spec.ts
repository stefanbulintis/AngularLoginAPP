import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelGenericComponent } from './tabel-generic.component';

describe('TabelGenericComponent', () => {
  let component: TabelGenericComponent;
  let fixture: ComponentFixture<TabelGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
