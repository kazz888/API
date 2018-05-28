import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowArtistComponent } from './show-artist/show-artist.component';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpotigyLoginComponent} from './spotigy-login/spotigy-login.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ShowArtistComponent,
    SpotigyLoginComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'Login', component: SpotigyLoginComponent },

    ]),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
