import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  spotifyLogin () {

    console.log("yissss");
       var promise = new Promise(function (resolve, reject) {
          var params = {
              client_id: '0295e76fd6d048b0beddbef44f6abb5a',
              redirect_uri: this,
          
              response_type: 'token'
          };
          var authCompleted = false;
          var authWindow = this.openDialog('https://accounts.spotify.com/authorize?' + this.toQueryString(params), 'Spotify', 'menubar=no,location=no,resizable=yes,scrollbars=yes' + function () {
             
          });
      });
  };
}
