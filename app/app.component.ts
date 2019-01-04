import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { VideoService } from './services/video.service';
import { Video } from './models/video';
import { Vlogvideo } from './models/vlogvideo';
import { VidService} from './services/vid.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnDestroy,OnInit  {
 
  queryString:string;
  closeResult: string;
  videos :Vlogvideo[];
  videos1:Video[];
  currentJustify = 'start';
 
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private videoService:VideoService, private vid: VidService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public modalService: NgbModal) { 
    this.mobileQuery = media.matchMedia('(max-width: 960px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
this.videoService.getVideos2().subscribe( vlogvids2 =>{
      this.videos= vlogvids2;
    
    }); 
    this.videoService.getVideos().subscribe( video =>{
      this.videos1= video;
    
    }); 
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  } 
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
 playVid(vlogvid:Vlogvideo){
   this.vid.changeVid(vlogvid.url);
   console.log(vlogvid.url);
   this.vid.saveInLocal('key',vlogvid.vlogerId);
 }
 playVid1(vlogvid:Video){
  this.vid.changeVid(vlogvid.source);
}
 onActivate(event) {
  window.scroll(0,0);
}

 
}
