import { Component, OnInit, Input } from '@angular/core';

import { AstronautService } from '../astronaut.service';

import { IAstronaut } from '../../models';

@Component({
  selector: 'app-astronaut-viewer',
  styleUrls: ['./astronaut-viewer.component.scss'],
  templateUrl: 'astronaut-viewer.component.html'
})
export class AstronautViewerComponent implements OnInit {

  @Input()
  astronautId: string;

  @Input()
  crewRole: string;

  astronaut: IAstronaut;

  constructor(private astronautService: AstronautService) { }

  ngOnInit() {
    // get astronaut
    this.astronaut = this.astronautService.getAstronaut(this.astronautId);
  }

}
