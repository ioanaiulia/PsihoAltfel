import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenzitivityComponent } from './senzitivity.component';

describe('SenzitivityComponent', () => {
  let component: SenzitivityComponent;
  let fixture: ComponentFixture<SenzitivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenzitivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenzitivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
