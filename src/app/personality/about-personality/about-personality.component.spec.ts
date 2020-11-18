import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPersonalityComponent } from './about-personality.component';

describe('AboutPersonalityComponent', () => {
  let component: AboutPersonalityComponent;
  let fixture: ComponentFixture<AboutPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPersonalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
