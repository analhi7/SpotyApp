import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service.ts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  
   newSongs:any[]=[];
   loading: boolean;
   error: boolean;
   messageError:string;
   

  constructor( private spotify:SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
                .subscribe((data:any) =>{
                this.newSongs = data;
                this.loading = false;

                }, (errorService)=>{
                  this.loading= false;
                   this.error = true
                   console.log(errorService)
                  this.messageError= errorService.error.error.message
                })

   }

  ngOnInit() {
  }

}
