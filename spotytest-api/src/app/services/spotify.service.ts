import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify listo');
   }

   obtenerNuevosLanzamientos() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAcZ9EKFM8lUMIWFeNrKIfe5UULChMd2kp-Am46dqN9E3aNHVIeFurT1YzU6hzgUjti3gL5GgxvKVybk1c' 
    });
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
   }
}
