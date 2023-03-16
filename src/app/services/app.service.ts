import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsBase } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = environment.baseUrl
  private apiKey = environment.newsApiKey

  constructor(
    private http: HttpClient
  ) { }

  getSearchApi(searchParam ="") {
    return this.http.get<NewsBase>(`${this.url}?apiKey=${this.apiKey}${searchParam ? "&q=" + searchParam : ""}`)

  }
}
