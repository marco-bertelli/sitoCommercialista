import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzaComponent } from './finanza.component';

describe('FinanzaComponent', () => {
  let component: FinanzaComponent;
  let fixture: ComponentFixture<FinanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
