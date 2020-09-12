import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitaliComponent } from './digitali.component';

describe('DigitaliComponent', () => {
  let component: DigitaliComponent;
  let fixture: ComponentFixture<DigitaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
