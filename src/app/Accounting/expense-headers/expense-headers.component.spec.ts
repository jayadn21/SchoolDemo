import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseHeadersComponent } from './expense-headers.component';

describe('ExpenseHeadersComponent', () => {
  let component: ExpenseHeadersComponent;
  let fixture: ComponentFixture<ExpenseHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
