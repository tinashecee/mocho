import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtzComponent } from './artz.component';

describe('ArtzComponent', () => {
  let component: ArtzComponent;
  let fixture: ComponentFixture<ArtzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
