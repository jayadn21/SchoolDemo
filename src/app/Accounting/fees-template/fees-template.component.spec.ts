import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesTemplateComponent } from './fees-template.component';

describe('FeesTemplateComponent', () => {
  let component: FeesTemplateComponent;
  let fixture: ComponentFixture<FeesTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
