import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebratestComponent } from './algebratest.component';

describe('AlgebratestComponent', () => {
  let component: AlgebratestComponent;
  let fixture: ComponentFixture<AlgebratestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgebratestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebratestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
