import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos: any[] = [];
  cargando: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    console.log('Home component constructor');
  }

  ngOnInit() {
    this.cargando = true;
    this.error = false;
    this.spotifyService.obtenerNuevosLanzamientos().subscribe( (data: any) => {
      this.nuevosLanzamientos = data;
      this.cargando = false;
    }, error => {
      this.cargando = false;
      this.error = true;
      this.mensajeError = error.error.error.message;
    });
  }

}
