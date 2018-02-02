import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapersComponent } from './diapers.component';

describe('DiapersComponent', () => {
  let component: DiapersComponent;
  let fixture: ComponentFixture<DiapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
