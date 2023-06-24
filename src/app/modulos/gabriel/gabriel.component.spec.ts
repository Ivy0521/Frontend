import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabrielComponent } from './gabriel.component';

describe('GabrielComponent', () => {
  let component: GabrielComponent;
  let fixture: ComponentFixture<GabrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabrielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
