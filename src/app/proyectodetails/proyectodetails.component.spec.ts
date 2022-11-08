import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectodetailsComponent } from './proyectodetails.component';

describe('ProyectodetailsComponent', () => {
  let component: ProyectodetailsComponent;
  let fixture: ComponentFixture<ProyectodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectodetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
