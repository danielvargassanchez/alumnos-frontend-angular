import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlumnosComponent } from './all-alumnos.component';

describe('AllAlumnosComponent', () => {
  let component: AllAlumnosComponent;
  let fixture: ComponentFixture<AllAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
