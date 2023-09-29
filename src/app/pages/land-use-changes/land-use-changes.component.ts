import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-use-changes',
  templateUrl: './land-use-changes.component.html',
  styleUrls: ['./land-use-changes.component.scss']
})
export class LandUseChangesComponent {
  constructor(private router: Router) {}

  navigateToOther() {
    this.router.navigate(['/cropland']); 
  }
}
