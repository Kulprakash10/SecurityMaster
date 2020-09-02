import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquityComponent } from './edit-equity.component';

describe('EditEquityComponent', () => {
  let component: EditEquityComponent;
  let fixture: ComponentFixture<EditEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
