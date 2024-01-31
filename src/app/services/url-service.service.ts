import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor(private http: HttpClient) { }

  getShortenUrl(url: string): Observable<any> {
    return this.http.get<any>(`https://is.gd/create.php?format=json&url=${url}`);
  }

}
