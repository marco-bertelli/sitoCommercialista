import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaghecontributiComponent } from './paghecontributi.component';

describe('PaghecontributiComponent', () => {
  let component: PaghecontributiComponent;
  let fixture: ComponentFixture<PaghecontributiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaghecontributiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaghecontributiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
