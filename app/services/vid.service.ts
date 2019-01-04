import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { VideoService } from './video.service';
import { Video } from '../models/video';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Vlogvideo } from '../models/vlogvideo';
import {Tv} from '../models/Tv';
import {Lv} from '../models/Lv';
import {Toptweet} from '../models/toptweet';
import {Event} from '../models/events';
import {Tweet} from '../models/tweet';
import {Music} from '../models/music';
import {News} from '../models/news';

 
@Injectable({
  providedIn: 'root'
})

export class VidService {
  videos :Video[];
  vlogvids :Vlogvideo[];
  video: Video ={
    id:'',
    picUrl:'',
    source:'',
    title:''
  } 
  
  drip :string;
  drip1 :string;
  drip2 :string;
  items: Array<any> = []
  latestvideos:Lv[];
  latestmusic:Lv[];
  latestarts:Lv[];
  topvideos:Tv[];
  topvideo:Tv ={
    id:'',
    picUrl:'',
    source:'',
    title:''
  };
  topmusic:Tv[];
  topmusic1:Tv ={
    id:'',
    picUrl:'',
    source:'',
    title:''
  };
  toparts:Tv[];
  topart:Tv ={
    id:'',
    picUrl:'',
    source:'',
    title:''
  };
  toptweet:Toptweet[];
  topevents:Event[];
  gospel:Music[];
  contemporary:Music[];
  hiphop:Music[];
  urban:Music[];
  sungura:Music[];
  jamaica:Music[];
  jazz:Music[];
  edm:Music[];
  ethnic:Music[];

  gospeltweets:Tweet[];
  contemporarytweets:Tweet[];
  hiphoptweets:Tweet[];
  urbantweets:Tweet[];
  sunguratweets:Tweet[];
  jamaicatweets:Tweet[];
  jazztweets:Tweet[];
  edmtweets:Tweet[];
  ethnictweets:Tweet[];

  gospelnews:News[];
  contemporarynews:News[];
  hiphopnews:News[];
  urbannews:News[];
  sunguranews:News[];
  jamaicanews:News[];
  jazznews:News[];
  edmnews:News[];
  ethnicnews:News[];

  gospelevents:Music[];
  contemporaryevents:Music[];
  hiphopevents:Music[];
  urbanevents:Music[];
  sunguraevents:Music[];
  jamaicaevents:Music[];
  jazzevents:Music[];
  edmevents:Music[];
  ethnicevents:Music[];
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
  public vidSource = new BehaviorSubject<string>("default message");
  currentSource = this.vidSource.asObservable();
  public vlogSource = new BehaviorSubject<string>("default message");
  currentVlogvids = this.vlogSource.asObservable();
  public vidId = new BehaviorSubject<string>(null);
  currentVlog = this.vidId.asObservable();
  
  public data:any=[];
  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService,private videoService:VideoService) {

    this.videoService.getVideos().subscribe( videos =>{
      this.videos = videos;});
      this.videoService.getVideos2().subscribe( vlogvids2 =>{
        this.vlogvids= vlogvids2;
   
      }); 


  this.videoService.getLatestvideos().subscribe( latestvideos =>{
    this.latestvideos = latestvideos;
    
});
this.videoService.getLatestmusic().subscribe( latestmusic =>{
  this.latestmusic = latestmusic;
  
});
this.videoService.getLatestarts().subscribe( latestarts =>{
this.latestarts = latestarts;

});

this.videoService.getTopvideos().subscribe( topvideos =>{
this.topvideos = topvideos;

});
this.videoService.getTopvideo().subscribe( topvideo =>{
this.topvideo = topvideo;
this.drip=this.topvideo.source;
});



this.videoService.getTopmusic().subscribe( topmusic =>{
this.topmusic = topmusic;

});
this.videoService.getTopmusic1().subscribe( topmusic1 =>{
this.topmusic1 = topmusic1;
this.drip1=this.topmusic1.source;
});


this.videoService.getToparts().subscribe( toparts =>{
this.toparts = toparts;
 
});
this.videoService.getTopart().subscribe( topart =>{
this.topart = topart;
this.drip2=this.topart.source;
});


this.videoService.getToptweets().subscribe( toptweet =>{
this.toptweet = toptweet;
});   
this.videoService.getTopevents().subscribe( topevents =>{
this.topevents = topevents;

}); 

this.videoService.filterBy1('gospel').subscribe(music =>{ this.gospel = music});
this.videoService.filterBy1('contemporary').subscribe(music =>{ this.contemporary = music});
this.videoService.filterBy1('hiphop').subscribe(music =>{ this.hiphop = music});
this.videoService.filterBy1('urban').subscribe(music =>{ this.urban = music});
this.videoService.filterBy1('sungura').subscribe(music =>{ this.sungura = music});
this.videoService.filterBy1('ethnic').subscribe(music =>{ this.ethnic = music});
this.videoService.filterBy1('jamaica').subscribe(music =>{ this.jamaica = music});
this.videoService.filterBy1('jazz').subscribe(music =>{ this.jazz = music});
this.videoService.filterBy1('edm').subscribe(music =>{ this.edm = music});

this.videoService.filterBy2('gospel').subscribe(tweet =>{ this.gospeltweets = tweet});
this.videoService.filterBy2('contemporary').subscribe(tweet =>{ this.contemporarytweets = tweet});
this.videoService.filterBy2('hiphop').subscribe(tweet =>{ this.hiphoptweets = tweet});
this.videoService.filterBy2('urban').subscribe(tweet =>{ this.urbantweets = tweet});
this.videoService.filterBy2('sungura').subscribe(tweet =>{ this.sunguratweets = tweet});
this.videoService.filterBy2('ethnic').subscribe(tweet =>{ this.ethnictweets = tweet});
this.videoService.filterBy2('jamaica').subscribe(tweet =>{ this.jamaicatweets = tweet});
this.videoService.filterBy2('jazz').subscribe(tweet =>{ this.jazztweets = tweet});
this.videoService.filterBy2('edm').subscribe(tweet =>{ this.edmtweets = tweet});

this.videoService.filterBy3('gospel').subscribe(news =>{ this.gospelnews = news});
this.videoService.filterBy3('contemporary').subscribe(news =>{ this.contemporarynews = news});
this.videoService.filterBy3('hiphop').subscribe(news =>{ this.hiphopnews = news});
this.videoService.filterBy3('urban').subscribe(news =>{ this.urbannews = news});
this.videoService.filterBy3('sungura').subscribe(news =>{ this.sunguranews = news});
this.videoService.filterBy3('ethnic').subscribe(news =>{ this.ethnicnews = news});
this.videoService.filterBy3('jamaica').subscribe(news =>{ this.jamaicanews = news});
this.videoService.filterBy3('jazz').subscribe(news =>{ this.jazznews = news});
this.videoService.filterBy3('edm').subscribe(news =>{ this.edmnews = news});

this.videoService.filterBy4('gospel').subscribe(events1 =>{ this.gospelevents = events1});
this.videoService.filterBy4('contemporary').subscribe(events1 =>{ this.contemporaryevents = events1});
this.videoService.filterBy4('hiphop').subscribe(events1 =>{ this.hiphopevents = events1});
this.videoService.filterBy4('urban').subscribe(events1 =>{ this.urbanevents = events1});
this.videoService.filterBy4('sungura').subscribe(events1 =>{ this.sunguraevents = events1});
this.videoService.filterBy4('ethnic').subscribe(events1 =>{ this.ethnicevents = events1});
this.videoService.filterBy4('jamaica').subscribe(events1 =>{ this.jamaicaevents = events1});
this.videoService.filterBy4('jazz').subscribe(events1 =>{ this.jazzevents = events1});
this.videoService.filterBy4('edm').subscribe(events1 =>{ this.edmevents = events1}); 

this.videoService.filterBy1('film').subscribe(music =>{ this.film = music});
this.videoService.filterBy1('theater').subscribe(music =>{ this.theater = music});
this.videoService.filterBy1('comedy').subscribe(music =>{ this.comedy = music});
this.videoService.filterBy1('dance').subscribe(music =>{ this.dance = music});

this.videoService.filterBy2('film').subscribe(tweet =>{ this.film = tweet});
this.videoService.filterBy2('theater').subscribe(tweet =>{ this.theater = tweet});
this.videoService.filterBy2('comedy').subscribe(tweet =>{ this.comedy = tweet});
this.videoService.filterBy2('dance').subscribe(tweet =>{ this.dance = tweet});

this.videoService.filterBy3('film').subscribe(news =>{ this.film = news});
this.videoService.filterBy3('theater').subscribe(news =>{ this.theater = news});
this.videoService.filterBy3('comedy').subscribe(news =>{ this.comedy = news});
this.videoService.filterBy3('dance').subscribe(news =>{ this.dance = news});

this.videoService.filterBy4('film').subscribe(events1 =>{ this.film = events1});
this.videoService.filterBy4('theater').subscribe(events1 =>{ this.theater = events1});
this.videoService.filterBy4('comedy').subscribe(events1 =>{ this.comedy = events1});
this.videoService.filterBy4('dance').subscribe(events1 =>{ this.dance = events1});
     
   }
  changeVid(source: string){
    this.vidSource.next(source);
  }
  loadVlogvids(vlog: string){
    this.vlogSource.next(vlog);
  }
  
  picVlog(vloger: string) {
    this.vidId.next(vloger); 
  }
  getVid(){
    return this.currentSource;
  }
  getVideoz(){
    return this.videos;
  }
  getLatestvideos(){
    return this.latestvideos;
  }
  getLatestmusic(){
    return this.latestmusic;
  }
  getLatestarts(){
    return this.latestarts;
  }
  getTopvideos(){
    return this.topvideos;
  }
  getToparts(){
    return this.toparts;
  }
  getTopmusic(){
    return this.topmusic;
  }
  getTopmusic1(){
    return this.topmusic1;
  }
  getDrip(){
    return this.drip;
  }
  getDrip1(){
    return this.drip1;
  }
  getDrip2(){
    return this.drip2;
  }
  getToptweet(){
    return this.toptweet;
  }
  getTopevent(){
    return this.topevents;
  }
  getVideoz1(){
    return this.vlogvids;
  } 
  getVlog(){
    return this.currentVlog;
  } 
  getVlogvids(){
    return this.currentVlogvids;
  }
  getGospel(){
    return this.gospel;
  }
  getContemporary(){
    return this.contemporary;
  }
  getHiphop(){
    return this.hiphop;
  }
  getUrban(){
    return this.urban;
  }
  getEthnic(){
    return this.ethnic;
  }
  getJamaica(){
    return this.jamaica;
  }
  getJazz(){
    return this.jazz;
  }
  getEdm(){
    return this.edm;
  }
  getGospeltweets(){
    return this.gospeltweets;
  }
  getContemporarytweets(){
    return this.contemporarytweets;
  }
  getHiphoptweets(){
    return this.hiphoptweets;
  }
  getUrbantweets(){
    return this.urbantweets;
  }
  getEthnictweets(){
    return this.ethnictweets;
  }
  getJamaicatweets(){
    return this.jamaicatweets;
  }
  getJazztweets(){
    return this.jazztweets;
  }
  getEdmtweets(){
    return this.edmtweets;
  }
  getGospelnews(){
    return this.gospelnews;
  }
  getContemporarynews(){
    return this.contemporary;
  }
  getHiphopnews(){
    return this.hiphopnews;
  }
  getUrbannews(){
    return this.urbannews;
  }
  getEthnicnews(){
    return this.ethnicnews;
  }
  getJamaicanews(){
    return this.jamaicanews;
  }
  getJazznews(){
    return this.jazznews;
  }
  getEdmnews(){
    return this.edmnews;
  }
  getGospelevents(){
    return this.gospelevents;
  }
  getContemporaryevents(){
    return this.contemporaryevents;
  }
  getHiphopevents(){
    return this.hiphopevents;
  }
  getUrbanevents(){
    return this.urbanevents;
  }
  getEthnicevents(){
    return this.ethnicevents;
  }
  getJamaicaevents(){
    return this.jamaicaevents;
  }
  getJazzevents(){
    return this.jazzevents;
  }
  getEdmevents(){
    return this.edmevents;
  }
  getFilm(){
    return this.film;
  }
  getTheater(){
    return this.theater;
  }
  getComedy(){
    return this.comedy;
  }
  getDance(){
    return this.dance;
  }
  getFilmtweets(){
    return this.filmtweets;
  }
  getTheatertweets(){
    return this.theatertweets;
  }
  getComedytweets(){
    return this.comedytweets;
  }
  getDancetweets(){
    return this.dancetweets;
  }
  getFilmnews(){
    return this.filmnews;
  }
  getTheaternews(){
    return this.theaternews;
  }
  getComedynews(){
    return this.comedynews;
  }
  getDancenews(){
    return this.dancenews;
  }
  getFilmevents(){
    return this.filmevents;
  }
  getTheaterevents(){
    return this.theaterevents;
  }
  getComedyevents(){
    return this.comedyevents;
  }
  getDanceevents(){
    return this.danceevents;
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }
   getFromLocal(key) {
    this.data[key]= this.storage.get(key);
    return this.data[key];
   }

}
