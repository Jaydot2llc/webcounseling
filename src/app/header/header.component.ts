import { Component, OnInit } from '@angular/core';
import { RtcserviceService } from '../services/rtcservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //constructor(private rtcserviceService: RtcserviceService) { }
  constructor() { }

  ngOnInit() {
  }

  onClickStartCall() {
    console.debug("Starting a webrtc call...");
    //this.rtcserviceService.startACall();
  }

  onClickJoinCall() {
    console.debug("Joing a webrtc call...");
  }

  onClickStopCall() {
    console.debug("Stopping a webrtc call...");
  }

}
