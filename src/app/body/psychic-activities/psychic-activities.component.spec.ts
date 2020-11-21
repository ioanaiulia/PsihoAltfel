import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychicActivitiesComponent } from './psychic-activities.component';

describe('PsychicActivitiesComponent', () => {
  let component: PsychicActivitiesComponent;
  let fixture: ComponentFixture<PsychicActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychicActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
