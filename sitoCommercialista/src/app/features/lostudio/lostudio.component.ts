import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lostudio',
  templateUrl: './lostudio.component.html',
  styleUrls: ['./lostudio.component.scss']
})
export class LostudioComponent implements OnInit {

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor() { }

  ngOnInit(): void {
  }

}
