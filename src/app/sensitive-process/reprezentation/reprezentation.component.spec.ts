import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprezentationComponent } from './reprezentation.component';

describe('ReprezentationComponent', () => {
  let component: ReprezentationComponent;
  let fixture: ComponentFixture<ReprezentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprezentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprezentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
