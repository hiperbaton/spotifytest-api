import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any;
  topTracks: any[] = [];
  cargando: boolean;

  constructor(private activatedRoute: ActivatedRoute,
  private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.cargando = true;
    this.activatedRoute.params.subscribe(params => {
      this.spotifyService.obtenerArtista(params['id']).subscribe( artista => {
        this.artista = artista;
      });
      this.spotifyService.obtenerTopTracksDeUnArtista(params['id']).subscribe(
      (data: any) => {
          console.log(data);
          this.topTracks = data;
        }
      );
      this.cargando = false;
    });
  }

}
