import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistictestComponent } from './statistictest.component';

describe('StatistictestComponent', () => {
  let component: StatistictestComponent;
  let fixture: ComponentFixture<StatistictestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistictestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistictestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
