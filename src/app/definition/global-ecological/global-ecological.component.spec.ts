import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEcologicalComponent } from './global-ecological.component';

describe('GlobalEcologicalComponent', () => {
  let component: GlobalEcologicalComponent;
  let fixture: ComponentFixture<GlobalEcologicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalEcologicalComponent]
    });
    fixture = TestBed.createComponent(GlobalEcologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
