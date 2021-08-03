import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchComponent } from './components/header/search/search.component';
import { HomeLoginCartComponent } from './components/header/home-login-cart/home-login-cart.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent, LogoComponent, SearchComponent, HomeLoginCartComponent, FooterComponent],
  exports: [NavComponent],
})

export class LayoutModule {}
