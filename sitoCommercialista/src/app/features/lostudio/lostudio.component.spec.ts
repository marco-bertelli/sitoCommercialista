import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostudioComponent } from './lostudio.component';

describe('LostudioComponent', () => {
  let component: LostudioComponent;
  let fixture: ComponentFixture<LostudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
