import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillnessComponent } from './willness.component';

describe('WillnessComponent', () => {
  let component: WillnessComponent;
  let fixture: ComponentFixture<WillnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
