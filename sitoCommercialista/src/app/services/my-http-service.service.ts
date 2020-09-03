import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {

  constructor(private httpClient: HttpClient) { }

  invia(url: string, body: { name: any; replyto: any; message: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {

    return this.httpClient.post(url,body,arg2); 
   }
}
