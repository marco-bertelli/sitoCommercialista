import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltriComponent } from './altri.component';

describe('AltriComponent', () => {
  let component: AltriComponent;
  let fixture: ComponentFixture<AltriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
