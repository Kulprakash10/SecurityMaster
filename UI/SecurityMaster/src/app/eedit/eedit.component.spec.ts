import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeditComponent } from './eedit.component';

describe('EeditComponent', () => {
  let component: EeditComponent;
  let fixture: ComponentFixture<EeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
