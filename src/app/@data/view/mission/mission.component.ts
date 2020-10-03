import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spacex-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  @Input()
  launch: any;

  constructor() { }

  ngOnInit(): void {
  }

  isLandSuccess(rocket: any) {
    let isSuccess: boolean;
    for (const core of rocket.first_stage.cores) {
      if (core.land_success !== null) {
        isSuccess = true;
        if (core.land_success === false) {
          isSuccess = false;
          break;
        }
      }
    }
    return isSuccess;
  }

}
