import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material.module';

import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionSummaryComponent } from './mission-summary/mission-summary.component';
import { MissionViewerComponent } from './mission-viewer/mission-viewer.component';
import { MissionService } from './mission.service';
import { MissionFormComponent } from './mission-form/mission-form.component';
import { AstronautService } from './astronaut.service';
import { AstronautViewerComponent } from './astronaut-viewer/astronaut-viewer.component';
import { NasaImageryService } from './nasa-imagery.service';

const routes: Routes = [
  {
    path: 'missions', children: [
      { path: '', component: MissionListComponent },
      { path: ':id', component: MissionViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    MissionListComponent,
    MissionSummaryComponent,
    MissionViewerComponent,
    MissionFormComponent,
    AstronautViewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    MissionListComponent
  ],
  providers: [
    MissionService,
    AstronautService,
    NasaImageryService
  ]
})
export class MissionModule { }
