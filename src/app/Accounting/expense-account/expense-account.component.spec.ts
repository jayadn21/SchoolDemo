import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAccountComponent } from './expense-account.component';

describe('ExpenseAccountComponent', () => {
  let component: ExpenseAccountComponent;
  let fixture: ComponentFixture<ExpenseAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
