import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeditComponent } from './bedit.component';

describe('BeditComponent', () => {
  let component: BeditComponent;
  let fixture: ComponentFixture<BeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
