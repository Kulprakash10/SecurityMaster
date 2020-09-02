import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEquityComponent } from './show-equity.component';

describe('ShowEquityComponent', () => {
  let component: ShowEquityComponent;
  let fixture: ComponentFixture<ShowEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
