import { Component, OnInit } from '@angular/core';
import { RtcserviceService } from '../services/rtcservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
  }

}
