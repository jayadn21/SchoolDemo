import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSetupComponent } from './attendance-setup.component';

describe('AttendanceSetupComponent', () => {
  let component: AttendanceSetupComponent;
  let fixture: ComponentFixture<AttendanceSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
