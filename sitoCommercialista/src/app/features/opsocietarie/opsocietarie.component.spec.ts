import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsocietarieComponent } from './opsocietarie.component';

describe('OpsocietarieComponent', () => {
  let component: OpsocietarieComponent;
  let fixture: ComponentFixture<OpsocietarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsocietarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsocietarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
