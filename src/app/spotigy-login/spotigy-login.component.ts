import { Injectable, Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/publishLast'
import { HttpModule } from '@angular/http';





@Injectable()
@Component({
  selector: 'app-spotigy-login',
  templateUrl: './spotigy-login.component.html',
  styleUrls: ['./spotigy-login.component.scss']
})
export class SpotigyLoginComponent implements OnInit {
  client_id = "[YOUR API KEY]";
  client_secret = "[YOUR SECRET KEY]";

  private accessToken: any;
  private tokenType: string;


  ngOnInit() {
    console.log("yissss");

  }
  constructor(private http: Http) { }

  login() {
    // let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    let authorizationTokenUrl = `/api/token`;
    console.log(this.client_id);

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';


    return this.http.post(authorizationTokenUrl, body, options)
      .map(data => data.json())
      .do(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));
  }

  searchAlbums(title: string) {
    const options = this.getOptions();
    return this.http.get(`https://api.spotify.com/v1/search?query=${title}&type=album`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  loadAlbum(id) {
    const options = this.getOptions();
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }


  private getOptions() {
    console.log(this.accessToken);
    console.log(this.tokenType);

    let header = new Headers();
    header.append('Authorization', this.tokenType + ' ' + this.accessToken);
    let options = new RequestOptions({ headers: header });

    return options;
  }
}
