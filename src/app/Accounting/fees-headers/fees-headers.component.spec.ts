import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesHeadersComponent } from './fees-headers.component';

describe('FeesHeadersComponent', () => {
  let component: FeesHeadersComponent;
  let fixture: ComponentFixture<FeesHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
