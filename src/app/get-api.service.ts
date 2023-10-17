import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get('https://countriesnow.space/api/v0.1/countries/population')
  }
}
