import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBondComponent } from './edit-bond.component';

describe('EditBondComponent', () => {
  let component: EditBondComponent;
  let fixture: ComponentFixture<EditBondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
