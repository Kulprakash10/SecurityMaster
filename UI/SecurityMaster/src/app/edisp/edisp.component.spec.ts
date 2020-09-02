import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdispComponent } from './edisp.component';

describe('EdispComponent', () => {
  let component: EdispComponent;
  let fixture: ComponentFixture<EdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
