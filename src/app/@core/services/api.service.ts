import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public apiGETWithParameters(url: string, parameters: any) {
    return this.httpClient.get(url, {
      params: parameters
    });
  }
}
