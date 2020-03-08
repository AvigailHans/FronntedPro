import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaiberyComponent } from './laibery.component';

describe('LaiberyComponent', () => {
  let component: LaiberyComponent;
  let fixture: ComponentFixture<LaiberyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaiberyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaiberyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
