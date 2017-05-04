import { Component, OnInit } from '@angular/core';
import { IMission } from "../../models";
import { MissionService } from "../mission.service";

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent implements OnInit {
  public missions: IMission[];
  private missionService: MissionService;

  constructor(ms: MissionService) {
    this.missionService = ms;
   }

  ngOnInit() {
    this.missions = this.missionService.getMissions(  )
  }

}
