import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { SimplePeer } from 'simple-peer';
// import * as SignalingChannel from 'webrtc-adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'webrtc-app';

  peer: any;

  @ViewChild('myVideo') liveVideo: ElementRef;

  constructor() {

  }

  chartForms = new FormGroup({
    targetPeer: new FormControl(''),
    message: new FormControl('')
  });

  ngAfterViewInit() {
    this.peerConfig();
  }

  peerConfig() {
    let video = this.liveVideo.nativeElement;
    const constraints = {
      video: true,
      audio: true
    }

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      this.peer = new SimplePeer({
        initiator: location.hash === '#init',
        trickle: false,
        stream: stream
      })

      this.peer.on('signal', data => {
        console.log(JSON.stringify(data));
        // this.targetId = JSON.stringify(data);
        this.chartForms.patchValue({
          targetPeer: data
        })
      });

      this.peer.on('data', data => {
        console.log('Received ' + data);
      })

      this.peer.on('stream', stream => {
        console.log('stream', stream);
        video.srcObject = stream;
        video.play();
      })

    })
      .catch(error => {
        console.log('error', error);
      })
  }

  connect() {
    this.peer.signal(JSON.parse(this.chartForms.controls['targetPeer'].value));
  }

  sendMessage() {
    this.peer.send(this.chartForms.controls['message'].value);
  }

}
