import { Component, OnInit, ViewChild } from '@angular/core';
import {SearchComponent} from '../header/search/search.component'
import { HomeLoginCartComponent } from '../header/home-login-cart/home-login-cart.component';
import { LogoComponent } from '../header/logo/logo.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'bookstack-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 @ViewChild(SearchComponent)
 private search = SearchComponent
 @ViewChild(HomeLoginCartComponent)
 private homeLoginCart = HomeLoginCartComponent
 @ViewChild (LogoComponent)
 private logo = LogoComponent
 @ViewChild (FooterComponent)
 private footer = FooterComponent

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('hi')
  }

}
