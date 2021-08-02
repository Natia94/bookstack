import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookstack-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('hi')
  }

}
