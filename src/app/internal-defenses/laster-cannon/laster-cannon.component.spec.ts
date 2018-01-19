import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasterCannonComponent } from './laster-cannon.component';

describe('LasterCannonComponent', () => {
  let component: LasterCannonComponent;
  let fixture: ComponentFixture<LasterCannonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasterCannonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasterCannonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
