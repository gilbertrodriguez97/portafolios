import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticadetailsComponent } from './practicadetails.component';

describe('PracticadetailsComponent', () => {
  let component: PracticadetailsComponent;
  let fixture: ComponentFixture<PracticadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
