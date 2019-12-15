import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTransactionComponent } from './internal-transaction.component';

describe('InternalTransactionComponent', () => {
  let component: InternalTransactionComponent;
  let fixture: ComponentFixture<InternalTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
