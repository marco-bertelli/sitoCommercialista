import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoComponent } from './contatto.component';

describe('ContattoComponent', () => {
  let component: ContattoComponent;
  let fixture: ComponentFixture<ContattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
