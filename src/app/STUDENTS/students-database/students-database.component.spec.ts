import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDatabaseComponent } from './students-database.component';

describe('StudentsDatabaseComponent', () => {
  let component: StudentsDatabaseComponent;
  let fixture: ComponentFixture<StudentsDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
