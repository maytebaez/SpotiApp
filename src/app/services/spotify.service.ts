import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url: string = `https://api.spotify.com/v1/${query}`;
    
    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQBs8xLqDfdSE9-U-FtX-lhvoikU_IoXnOF1n_BLnTq2jqWazREHVVqkOVfeKVObzxJ-WCrE53yI-4ZYAgs'
    });
    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe(map(data =>data['albums'].items));
  }

  search(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data=>data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
      //.pipe(map( (data:any)=>data['artists'].items));
  }

  getTopTrack(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map( (data:any)=>data['tracks']));
  }
}
