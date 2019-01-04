import { Component, OnInit } from '@angular/core';
import { VidService} from '../services/vid.service';
import { VideoService } from '../services/video.service';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {Tweet} from '../models/tweet';
import {Music} from '../models/music';
import {News} from '../models/news';
import {Event} from '../models/events';

@Component({
  selector: 'app-artz',
  templateUrl: './artz.component.html',
  styleUrls: ['./artz.component.css'],
  providers: [NgbTabsetConfig]
})
export class ArtzComponent implements OnInit {
  constructor( public videoService:VideoService,config: NgbTabsetConfig,private vid: VidService) { 
    window.scroll(0,0);
    config.justify = 'center';
    config.type = 'pills';
  }
  drip:string;
film:Music[];
filmtweets:Tweet[];
filmnews:News[];
filmevents:Event[];
theater:Music[];
theatertweets:Tweet[];
theaternews:News[];
theaterevents:Event[];
comedy:Music[];
comedytweets:Tweet[];
comedynews:News[];
comedyevents:Event[];
dance:Music[];
dancetweets:Tweet[];
dancenews:News[];
danceevents:Event[];
  ngOnInit() {
    this.videoService.filterBy1('film').subscribe(music =>{ this.film = music});
    this.film=this.vid.getFilm();
    this.videoService.filterBy1('theater').subscribe(music =>{ this.theater = music});
    this.theater=this.vid.getTheater();
    this.videoService.filterBy1('comedy').subscribe(music =>{ this.comedy = music});
    this.comedy=this.vid.getComedy();
    this.videoService.filterBy1('dance').subscribe(music =>{ this.dance = music});
    this.dance=this.vid.getDance();
    
    this.videoService.filterBy2('film').subscribe(tweet =>{ this.filmtweets = tweet});
    this.filmtweets=this.vid.getFilmtweets();
    this.videoService.filterBy2('theater').subscribe(tweet =>{ this.theatertweets = tweet});
    this.theatertweets=this.vid.getTheatertweets();
    this.videoService.filterBy2('comedy').subscribe(tweet =>{ this.comedytweets = tweet});
    this.comedytweets=this.vid.getComedytweets();
    this.videoService.filterBy2('dance').subscribe(tweet =>{ this.dancetweets = tweet});
    this.dancetweets=this.vid.getDancetweets();

    this.videoService.filterBy3('film').subscribe(news =>{ this.filmnews = news});
    this.filmnews=this.vid.getFilmnews();
    this.videoService.filterBy3('theater').subscribe(news =>{ this.theaternews = news});
    this.theaternews=this.vid.getTheaternews();
    this.videoService.filterBy3('comedy').subscribe(news =>{ this.comedynews = news});
    this.comedynews=this.vid.getComedynews();
    this.videoService.filterBy3('dance').subscribe(news =>{ this.dancenews = news});
    this.dancenews=this.vid.getDancenews();

    this.videoService.filterBy4('film').subscribe(events1 =>{ this.filmevents = events1});
    this.filmevents=this.vid.getFilmevents();
    this.videoService.filterBy4('theater').subscribe(events1 =>{ this.theaterevents = events1});
    this.theaterevents=this.vid.getTheaterevents();
    this.videoService.filterBy4('comedy').subscribe(events1 =>{ this.comedyevents = events1});
    this.comedyevents=this.vid.getComedyevents();
    this.videoService.filterBy4('dance').subscribe(events1 =>{ this.danceevents = events1});
    this.danceevents=this.vid.getDanceevents();
    
  }
  setDrip(event, video) {
    this.drip=video.source;
  }


}
