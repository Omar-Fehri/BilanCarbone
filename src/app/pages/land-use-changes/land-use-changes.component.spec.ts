import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandUseChangesComponent } from './land-use-changes.component';

describe('LandUseChangesComponent', () => {
  let component: LandUseChangesComponent;
  let fixture: ComponentFixture<LandUseChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandUseChangesComponent]
    });
    fixture = TestBed.createComponent(LandUseChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
