import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer BQCtGE-2Y3sGyjEwXis-GxF_EKfGYbztlXgzPMhamwwcGym8ZoAYjwy0DnmwDghCJQWVyqDUIaN-Ngj_q5w' 
      });
    return this.http.get(url, {headers});
  }

  obtenerNuevosLanzamientos() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => data.albums.items));
  }

  obtenerArtistas(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=20`).pipe(map((data: any) => data.artists.items));
  }
}
