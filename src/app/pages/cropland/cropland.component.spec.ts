import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroplandComponent } from './cropland.component';

describe('CroplandComponent', () => {
  let component: CroplandComponent;
  let fixture: ComponentFixture<CroplandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CroplandComponent]
    });
    fixture = TestBed.createComponent(CroplandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
