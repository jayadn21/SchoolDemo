import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesAccountsComponent } from './fees-accounts.component';

describe('FeesAccountsComponent', () => {
  let component: FeesAccountsComponent;
  let fixture: ComponentFixture<FeesAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
