import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service.ts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  
  loading: boolean;
 artists: any[]=[];
 error: boolean;
 messageError:string;

  constructor(private spotify:SpotifyService) { 

   

  }


  
  search(term:string){
  

    this.loading = true;
    this.spotify.getArtists( term )
                .subscribe((data:any) =>{
                 
                  this.artists = data;
                  this.loading = false;
                },
                (errorService)=>{
                  this.loading= false;
                   this.error = true
                   console.log(errorService)
                  this.messageError= errorService.error.error.message
                })

  }

}
