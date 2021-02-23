import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentPlaceItemComponent } from './entertainment-place-item.component';

describe('EntertainmentPlaceItemComponent', () => {
  let component: EntertainmentPlaceItemComponent;
  let fixture: ComponentFixture<EntertainmentPlaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentPlaceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentPlaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
