import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPsychicActivitiesComponent } from './about-psychic-activities.component';

describe('AboutPsychicActivitiesComponent', () => {
  let component: AboutPsychicActivitiesComponent;
  let fixture: ComponentFixture<AboutPsychicActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPsychicActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPsychicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
