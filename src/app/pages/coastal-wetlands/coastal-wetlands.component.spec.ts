import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoastalWetlandsComponent } from './coastal-wetlands.component';

describe('CoastalWetlandsComponent', () => {
  let component: CoastalWetlandsComponent;
  let fixture: ComponentFixture<CoastalWetlandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoastalWetlandsComponent]
    });
    fixture = TestBed.createComponent(CoastalWetlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
