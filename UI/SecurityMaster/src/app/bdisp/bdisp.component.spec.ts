import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdispComponent } from './bdisp.component';

describe('BdispComponent', () => {
  let component: BdispComponent;
  let fixture: ComponentFixture<BdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
