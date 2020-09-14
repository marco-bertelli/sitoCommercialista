import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'src/app/core/models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  visibile=false;
   
  constructor(router:Router,) {​
}

  ngOnInit(): void {

}
mostra(){
  this.visibile=!this.visibile;
}
}
