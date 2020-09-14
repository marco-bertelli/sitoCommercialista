import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areaclienti',
  templateUrl: './areaclienti.component.html',
  styleUrls: ['./areaclienti.component.scss']
})
export class AreaclientiComponent implements OnInit {

  privacy=false;

  constructor() { }

  ngOnInit(): void {
  }

  accetta(){
    this.privacy=!this.privacy;
  }

}
