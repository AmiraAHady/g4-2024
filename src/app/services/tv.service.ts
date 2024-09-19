import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  apiKey = 'c6c257a0fa45c9003ee9b1f546013fa6';
  constructor(private http: HttpClient) {}

  getAllTvs(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}`
    );
  }

  getById(tvId: number) {
    return this.http.get(`
      https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.apiKey}`);
  }
}
