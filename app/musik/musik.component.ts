import { Component, OnInit,Input } from '@angular/core';
import { Video } from '../models/video';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {Tweet} from '../models/tweet';
import { VidService} from '../services/vid.service';
import { VideoService } from '../services/video.service';
import {Music} from '../models/music';
import {News} from '../models/news';

@Component({
  selector: 'app-musik',
  templateUrl: './musik.component.html',
  styleUrls: ['./musik.component.css'],
  providers: [NgbTabsetConfig]
})
export class MusikComponent implements OnInit {
  drip:string;
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

  constructor( public videoService:VideoService,config: NgbTabsetConfig,private vid: VidService) { 
    window.scroll(0,0);
    config.justify = 'center';
    config.type = 'pills';
  }
  source:string;
  
  ngOnInit() {
    
    //this.videoService.filterBy1('gospel').subscribe(music =>{ this.gospel = music});
    this.gospel=this.vid.getGospel();
    //this.videoService.filterBy1('contemporary').subscribe(music =>{ this.contemporary = music});
    this.contemporary=this.vid.getContemporary();
    //this.videoService.filterBy1('hiphop').subscribe(music =>{ this.hiphop = music});
    this.hiphop=this.vid.getHiphop();
    //this.videoService.filterBy1('urban').subscribe(music =>{ this.urban = music});
    this.urban=this.vid.getUrban();
    //this.videoService.filterBy1('sungura').subscribe(music =>{ this.sungura = music});
    //this.videoService.filterBy1('ethnic').subscribe(music =>{ this.ethnic = music});
    this.ethnic=this.vid.getEthnic();
    //this.videoService.filterBy1('jamaica').subscribe(music =>{ this.jamaica = music});
    this.jamaica=this.vid.getJamaica();
    //this.videoService.filterBy1('jazz').subscribe(music =>{ this.jazz = music});
    this.jazz=this.vid.getJazz();
    //this.videoService.filterBy1('edm').subscribe(music =>{ this.edm = music});
    this.edm=this.vid.getEdm();
    
    //this.videoService.filterBy2('gospel').subscribe(tweet =>{ this.gospeltweets = tweet});
    this.gospeltweets=this.vid.getGospeltweets();
    //this.videoService.filterBy2('contemporary').subscribe(tweet =>{ this.contemporarytweets = tweet});
    this.contemporarytweets=this.vid.getContemporarytweets();
    //this.videoService.filterBy2('hiphop').subscribe(tweet =>{ this.hiphoptweets = tweet});
    this.hiphoptweets=this.vid.getHiphoptweets();
    //this.videoService.filterBy2('urban').subscribe(tweet =>{ this.urbantweets = tweet});
    this.urbantweets=this.vid.getUrbantweets();
    //this.videoService.filterBy2('sungura').subscribe(tweet =>{ this.sunguratweets = tweet});
    //this.videoService.filterBy2('ethnic').subscribe(tweet =>{ this.ethnictweets = tweet});
    this.ethnictweets=this.vid.getEthnictweets();
    //this.videoService.filterBy2('jamaica').subscribe(tweet =>{ this.jamaicatweets = tweet});
    this.jamaicatweets=this.vid.getJamaicatweets();
    //this.videoService.filterBy2('jazz').subscribe(tweet =>{ this.jazztweets = tweet});
    this.jazztweets=this.vid.getJazztweets();
    //this.videoService.filterBy2('edm').subscribe(tweet =>{ this.edmtweets = tweet});
    this.edmtweets=this.vid.getEdmtweets();
    
    //this.videoService.filterBy3('gospel').subscribe(news =>{ this.gospelnews = news});
    this.gospelnews=this.vid.getGospelnews();
    //this.videoService.filterBy3('contemporary').subscribe(news =>{ this.contemporarynews = news});
    this.contemporarynews=this.vid.getContemporarynews();
    //this.videoService.filterBy3('hiphop').subscribe(news =>{ this.hiphopnews = news});
    this.hiphopnews=this.vid.getHiphopnews();
    //this.videoService.filterBy3('urban').subscribe(news =>{ this.urbannews = news});
    this.urbannews=this.vid.getUrbannews();
    //this.videoService.filterBy3('sungura').subscribe(news =>{ this.sunguranews = news});
    //this.videoService.filterBy3('ethnic').subscribe(news =>{ this.ethnicnews = news});
    this.ethnicnews=this.vid.getEthnicnews();
    //this.videoService.filterBy3('jamaica').subscribe(news =>{ this.jamaicanews = news});
    this.jamaicanews=this.vid.getJamaicanews();
    //this.videoService.filterBy3('jazz').subscribe(news =>{ this.jazznews = news});
    this.jazznews=this.vid.getJazznews();
    //this.videoService.filterBy3('edm').subscribe(news =>{ this.edmnews = news});
    this.edmnews=this.vid.getEdmnews();

    //this.videoService.filterBy4('gospel').subscribe(events1 =>{ this.gospelevents = events1});
    this.gospelevents=this.vid.getGospelevents();
    //this.videoService.filterBy4('contemporary').subscribe(events1 =>{ this.contemporaryevents = events1});
    this.contemporaryevents=this.vid.getContemporaryevents();
    //this.videoService.filterBy4('hiphop').subscribe(events1 =>{ this.hiphopevents = events1});
    this.hiphopevents=this.vid.getHiphopevents();
    //this.videoService.filterBy4('urban').subscribe(events1 =>{ this.urbanevents = events1});
    this.urbanevents=this.vid.getUrbanevents();
    //this.videoService.filterBy4('sungura').subscribe(events1 =>{ this.sunguraevents = events1});
    //this.videoService.filterBy4('ethnic').subscribe(events1 =>{ this.ethnicevents = events1});
    this.ethnicevents=this.vid.getEthnicevents();
    //this.videoService.filterBy4('jamaica').subscribe(events1 =>{ this.jamaicaevents = events1});
    this.jamaicaevents=this.vid.getJamaicaevents();
    //this.videoService.filterBy4('jazz').subscribe(events1 =>{ this.jazzevents = events1});
    this.jazzevents=this.vid.getJazzevents();
    //this.videoService.filterBy4('edm').subscribe(events1 =>{ this.edmevents = events1});
    this.edmevents=this.vid.getEdmevents();
    
  }
  setDrip(event, video) {
    this.drip=video.source;
  }
}
