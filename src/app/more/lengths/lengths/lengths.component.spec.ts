import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthsComponent } from './lengths.component';

describe('LengthsComponent', () => {
  let component: LengthsComponent;
  let fixture: ComponentFixture<LengthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
