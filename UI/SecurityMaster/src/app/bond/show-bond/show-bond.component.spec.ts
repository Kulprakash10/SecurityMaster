import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBondComponent } from './show-bond.component';

describe('ShowBondComponent', () => {
  let component: ShowBondComponent;
  let fixture: ComponentFixture<ShowBondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
