import { Component, OnInit ,ElementRef} from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';
import { NguCarousel , NguCarouselStore,  } from '@ngu/carousel';
import { VidService} from '../services/vid.service';
import {Tv} from '../models/Tv';
import {Lv} from '../models/Lv';
import {Toptweet} from '../models/toptweet';
import {Event} from '../models/events';
import { ViewChild } from '@angular/core';
import {ScrollHelper} from './helperscroll';
import { Router,NavigationEnd } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  sectionScroll:string=null;
  video: Video ={
    id:'',
    picUrl:'',
    source:'',
    title:''
  }
  drip :string;
  drip1 :string;
  drip2 :string;
  videos :Video[];
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
  profileimages: Array<any>=[]
  constructor( private videoService:VideoService, private vid: VidService, public router:Router) { 
    
  }
 

  public carouselBanner: NguCarousel;
 
  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;
  
  public carouselTile1: NguCarousel;
  public carouselTile2: NguCarousel;
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll= null;
    });
      this.videoService.getVideos().subscribe( videos =>{
          this.videos = videos;
          
      });
      this.videos=this.vid.getVideoz();
  
    this.videoService.getLatestvideos().subscribe( latestvideos =>{
      this.latestvideos = latestvideos;
      
  });
  this.latestvideos=this.vid.getLatestvideos();
  this.videoService.getLatestmusic().subscribe( latestmusic =>{
    this.latestmusic = latestmusic;
    
});
this.latestmusic=this.vid.getLatestmusic();
this.videoService.getLatestarts().subscribe( latestarts =>{
  this.latestarts = latestarts;
  
});
this.latestarts=this.vid.getLatestarts();

this.videoService.getTopvideos().subscribe( topvideos =>{
  this.topvideos = topvideos;
  
});
this.topvideos=this.vid.getTopvideos();
this.videoService.getTopvideo().subscribe( topvideo =>{
  this.topvideo = topvideo;
  this.drip=this.topvideo.source;
});
this.drip=this.vid.getDrip();


this.videoService.getTopmusic().subscribe( topmusic =>{
  this.topmusic = topmusic;
  
});
this.topmusic=this.vid.getTopmusic();
this.videoService.getTopmusic1().subscribe( topmusic1 =>{
  this.topmusic1 = topmusic1;
  this.drip1=this.topmusic1.source;
});

this.drip1=this.vid.getDrip1();


this.videoService.getToparts().subscribe( toparts =>{
  this.toparts = toparts;
   
});
this.toparts=this.vid.getToparts();
this.videoService.getTopart().subscribe( topart =>{
  this.topart = topart;
  this.drip2=this.topart.source;
});
this.drip2=this.vid.getDrip2();
 
this.videoService.getToptweets().subscribe( toptweet =>{
  this.toptweet = toptweet;
}); 
this.toptweet=this.vid.getToptweet();  
this.videoService.getTopevents().subscribe( topevents =>{
  this.topevents = topevents;
  
}); 
this.topevents=this.vid.getTopevent();

  $('.vid-item').each(function(index){
    $(this).on('click', function(){
      var current_index = index+1;
      $('.vid-item .thumb').removeClass('active');
      $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
    });
  });

    $('#carouselExample').on('slide.bs.carousel', function (e) {

      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 7;
      var totalItems = $('.carousel-item').length; 
      
      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('.carousel-item').eq(i).appendTo('.carousel-inner');
              }
              else {
                  $('.carousel-item').eq(0).appendTo('.carousel-inner');
              }
          }
      }
  });
  
//carousel ngu
this.carouselBanner = {
  grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
  slide: 1,
  speed: 800,
  animation: 'lazy',
  interval: 2000,
  point: {
    visible: true,
    pointStyles: `
      .ngucarouselPoint {
        list-style-type: none;
        text-align: center;
        padding: 12px;
        margin: 0;
        white-space: nowrap;
        overflow: auto;
        position: absolute;
        width: 100%;
        left: 0;
        box-sizing: border-box;
      }
      .ngucarouselPoint li {
        display: inline-block;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.55);
        padding: 5px;
        margin: 0 3px;
        transition: .4s ease all;
      }
      .ngucarouselPoint li.active {
          background: white;
          width: 10px;
      }
    `
  },
  load: 2,
  loop: true,
  touch: true,
  easing: 'ease'
};



this.carouselTile = {
  grid: {xs: 1, sm: 1, md: 4, lg: 4, all: 0},
  slide: 1,
  speed: 800,
  animation: 'lazy',
  interval: 2000,
  point: {
    visible: true,
    pointStyles: `
    .ngucarouselPoint {
      list-style-type: none;
      text-align: center;
      padding: 12px;
      margin: 0;
      white-space: nowrap;
      overflow: auto;
      position: absolute;
      width: 100%;
      bottom: 20px;
      left: 0;
      box-sizing: border-box;
    }
    .ngucarouselPoint li {
      display: inline-block;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.55);
      padding: 5px;
      margin: 0 3px;
      transition: .4s ease all;
    }
    .ngucarouselPoint li.active {
        background: white;
        width: 10px;
    }
    `
  },
  load: 2,
  loop: true,
  touch: true,
  easing: 'ease'
}

this.carouselTile1 = {
  grid: {xs: 1, sm: 1, md: 4, lg: 4, all: 0},
  slide: 1,
  speed: 500,
  animation: 'lazy',
  interval: 6000,
  point: {
    visible: true,
    pointStyles: `
    .ngucarouselPoint {
      list-style-type: none;
      text-align: center;
      padding: 8px;
      margin: 0;
      white-space: nowrap;
      overflow: auto;
      position: absolute;
      width: 100%;
      bottom: 20px;
      left: 0;
      box-sizing: border-box;
    }
    .ngucarouselPoint li {
      display: inline-block;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.55);
      padding: 5px;
      margin: 0 3px;
      transition: .4s ease all;
    }
    .ngucarouselPoint li.active {
        background: white;
        width: 10px;
    }
    `
  },
  load: 2,
  loop: true,
  touch: true,
  easing: 'ease'
}
this.carouselTile2 = {
  grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
  slide: 1,
  speed: 500,
  animation: 'lazy',
  interval: 6000,
  point: {
    visible: true,
    pointStyles: `
    .ngucarouselPoint {
      list-style-type: none;
      text-align: center;
      padding: 12px;
      margin: 0;
      white-space: nowrap;
      overflow: auto;
      position: absolute;
      width: 100%;
      bottom: 20px;
      left: 0;
      box-sizing: border-box;
    }
    .ngucarouselPoint li {
      display: inline-block;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.55);
      padding: 5px;
      margin: 0 3px;
      transition: .4s ease all;
    }
    .ngucarouselPoint li.active {
        background: white;
        width: 10px;
    } `
  },
  load: 2,
  loop: true,
  touch: true,
  easing: 'ease'
}
  }
  internalRoute(dst){
    this.sectionScroll=dst;
    this.router.navigate(['/'], {fragment: dst});
    
}
   /* It will be triggered on every slide*/
   onmoveFn(data: NguCarouselStore) {
   
  }
  setDrip(event, video) {
    this.drip=video.source;
  }
  setDrip1(event, video) {
    this.drip1=video.source;
  }
  setDrip2(event, video) {
    this.drip2=video.source;
  }
  playVid(video:Lv){
    this.vid.changeVid(video.source);
  }
  doScroll() {

    if (!this.sectionScroll) {
      return;
    }
    try {
      var elements = document.getElementById(this.sectionScroll);

      elements.scrollIntoView();
    }
    finally{
      this.sectionScroll = null;
    }
  } 
}
