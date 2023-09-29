import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlandWetlandsComponent } from './inland-wetlands.component';

describe('InlandWetlandsComponent', () => {
  let component: InlandWetlandsComponent;
  let fixture: ComponentFixture<InlandWetlandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlandWetlandsComponent]
    });
    fixture = TestBed.createComponent(InlandWetlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
