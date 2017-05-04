import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';

import {
  ICrew,
  IMission
} from '../../models';

import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-viewer',
  templateUrl: './mission-viewer.component.html',
  styleUrls: ['./mission-viewer.component.scss']
})
export class MissionViewerComponent implements OnInit {

  public mission: IMission;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private missionService: MissionService
  ) { }

  ngOnInit() {
    // get the mission
    this.mission = this.missionService.getMission(this.route.snapshot.params['id']);
  }

  public addCrew(newCrew: ICrew): void {
    this.mission.crew.push(newCrew);
  }

}
