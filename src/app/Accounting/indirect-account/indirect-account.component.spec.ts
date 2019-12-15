import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectAccountComponent } from './indirect-account.component';

describe('IndirectAccountComponent', () => {
  let component: IndirectAccountComponent;
  let fixture: ComponentFixture<IndirectAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndirectAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
