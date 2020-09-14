import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoricontabiliComponent } from './lavoricontabili.component';

describe('LavoricontabiliComponent', () => {
  let component: LavoricontabiliComponent;
  let fixture: ComponentFixture<LavoricontabiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavoricontabiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoricontabiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
