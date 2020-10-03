import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  
  artista:any=[];
  loading: boolean;
  topTracks: any[]=[];

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe( params =>{
    this.getArtista(params['id']);
    this.getTopTracks(params['id']);
    this.loading=true;
    })
   }
  
   getArtista (id: string){
     this.spotify.getArtista(id)
      .subscribe(artista => {this.artista=artista;
        this.loading=false;
      });
      
   }

   getTopTracks(id: string){
    this.loading=true;
     this.spotify.getTopTrack(id)
     .subscribe( topTracks => {
      this.topTracks=topTracks;
      this.loading=false

     }
)
   }


}
