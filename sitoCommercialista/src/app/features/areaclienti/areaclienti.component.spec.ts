import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaclientiComponent } from './areaclienti.component';

describe('AreaclientiComponent', () => {
  let component: AreaclientiComponent;
  let fixture: ComponentFixture<AreaclientiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaclientiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaclientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
