import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSettingsComponent } from './students-settings.component';

describe('StudentsSettingsComponent', () => {
  let component: StudentsSettingsComponent;
  let fixture: ComponentFixture<StudentsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
