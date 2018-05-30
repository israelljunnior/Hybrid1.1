import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleService {

  public key: string = "AIzaSyDayupNAHot4Rst1q2lMuzvqB_W3He33j4";
  
  constructor(private _http: HttpClient) {}

  translate(obj: GoogleObj) {
    return this._http.post(url + this.key, obj);
  }

  detect(obj: GoogleObj) {
    return this._http.post(urlDetect + this.key, obj);
  }
  
  
 
}

const url = 'https://translation.googleapis.com/language/translate/v2?key=';
const urlDetect = 'https://translation.googleapis.com/language/translate/v2/detect?key=' ;
export class GoogleObj {

  q: string;
  source: string = "en";
  target: string = "en";
  format: string = 'text';

  constructor() {}

}
