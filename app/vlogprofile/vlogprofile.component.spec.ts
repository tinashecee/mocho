import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogprofileComponent } from './vlogprofile.component';

describe('VlogprofileComponent', () => {
  let component: VlogprofileComponent;
  let fixture: ComponentFixture<VlogprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
