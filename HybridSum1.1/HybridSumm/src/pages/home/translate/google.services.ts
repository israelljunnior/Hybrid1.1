import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleService {
  constructor(private _http: HttpClient) {}

  translate(obj: GoogleObj, key: string) {
    return this._http.post(url + key, obj);
  }

  detect(obj: GoogleObj, key: string) {
    return this._http.post(urlDetect + key, obj);
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
