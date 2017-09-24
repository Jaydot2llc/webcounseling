import { Injectable } from '@angular/core';
import { SimpleWebRTC } from 'simplewebrtc';

@Injectable()
export class RtcserviceService {

  webrtc_capable: boolean = true;
  rtc_peer_connection: string = null;
  rtc_session_description: string = null;
  get_user_media: string = null;
  connect_stream_to_src: string = null;
  stun_server: string = "";
  webrtc: SimpleWebRTC = null;


  constructor(private localVideo: string, private remoteVideo: string) { 
    this.webrtc = new SimpleWebRTC({
      localVideoE1: this.localVideo,
      remortVideoE1: this.remoteVideo,
      autoRequestMedia: true
    });
  }

  /**
   * Join the a WebRTC Room
   * @param room 
   */
  joinRoom(room: String) {
    console.info("joinRoom " + room + "...");
    if(room == null) {
      console.warn("The room was null, so setting room to default, main...");
      room = "main";
    }
  }

  startACall() {
    console.info("Starting a new WebRTC call...");
  }

  stopACall() {
    console.info("Stopping a WebRTC call...");
  }

}
