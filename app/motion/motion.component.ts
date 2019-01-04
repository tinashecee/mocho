import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { VidService } from '../services/vid.service';
import { VideoService } from '../services/video.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Video1 } from '../models/video1';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Vloger} from '../models/Vloger';
import { Observable } from '../../../node_modules/rxjs';

declare var $:any;
@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css'],
  providers: [NgbTabsetConfig]
})
export class MotionComponent implements OnInit {
  vlogersCollection: AngularFirestoreCollection<Vloger>;
  vlogers$:Observable<Vloger[]>;
    video: Video ={
      id:'',
      picUrl:'',
      source:'',
      title:''
    }
     drip :string; 
    videos :Video[];
    currentJustify = 'start';
  videos$:Video1[];
  
    constructor(config: NgbTabsetConfig,public afs:AngularFirestore,private videoService:VideoService ,private vid:VidService,private router:Router,private route:ActivatedRoute) { 
      window.scroll(0,0);
      config.justify = 'center';
    config.type = 'pills';
       
       this.vlogersCollection = this.afs.collection('vlogers');
      this.vlogers$ = this.vlogersCollection.valueChanges();
      
    }
   
    ngOnInit() {
      this.videoService.getVideos().subscribe( videos =>{
        this.videos = videos;
    });
   
     this.videos=this.vid.getVideoz();
     
      $(window).scroll(function() {
        var $height = $(window).scrollTop();
        if($height > 100) {
          $('#right-adv').addClass('active');
         
        } else {
          $('#right-adv').removeClass('active');
     
        }
      });
      $(window).scroll(function() {
        var $height = $(window).scrollTop();
        if($height > 300) {
          $('#left-adv').addClass('active');
          
          $('#toppy').addClass('active');
        } else {
          $('#left-adv').removeClass('active');
          $('#toppy').removeClass('active');
        }
      });
      $(window).scroll(function() {
        var $height = $(window).scrollTop();
        if($height > 430) {
          $('#bmu').addClass('active');
        } else {
          $('#bmu').removeClass('active');
        }
      });
      
      $('#carouselExample').on('slide.bs.carousel', function (e) {
  
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
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
      
      
    }
    setDrip(event, video) {
      this.drip=video.source;
    }
    loadProfile(vloger){
     this.vid.saveInLocal('key1',vloger.matcher);
    }
}
