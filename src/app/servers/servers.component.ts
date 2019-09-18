import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewServer: boolean = false;
  serverCreationStatus: string = 'No server created yet!!!';

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'New Server Created!!!';
  }

  ngOnInit() {
  }

}
