import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from '../app/pages/start/start.component';
import { DescriptionComponent } from './pages/description/description.component';
import { LandUseChangesComponent } from './pages/land-use-changes/land-use-changes.component';
import { CroplandComponent } from './pages/cropland/cropland.component';
import { GrasslandComponent } from './pages/grassland/grassland.component';
import { ManagementComponent } from './pages/management/management.component';
import { InlandWetlandsComponent } from './pages/inland-wetlands/inland-wetlands.component';
import { CoastalWetlandsComponent } from './pages/coastal-wetlands/coastal-wetlands.component';
import { FisheriesComponent } from './pages/fisheries/fisheries.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'land', component: LandUseChangesComponent },
  { path: 'cropland', component: CroplandComponent },
  { path: 'grassland', component: GrasslandComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'inland', component: InlandWetlandsComponent },
  { path: 'coastal', component: CoastalWetlandsComponent },
  { path: 'fisheries', component: FisheriesComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'results', component: ResultsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
