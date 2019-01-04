import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';
import { VidService} from '../services/vid.service';
import { Vlogvideo } from '../models/vlogvideo';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore} from 'angularfire2/firestore';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit,AfterViewInit {
  
  video: Video ={
    id:'',
    picUrl:'',
    source:'',
    title:''
  }
  drip :string; 
  vlogvids:Vlogvideo[];
  categoriaToFilter:string;
  source:string;
  val:any;
  public data:any=[]
  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService,public afs:AngularFirestore, private videoService:VideoService, private vid: VidService,public route:ActivatedRoute ) {
     window.scroll(0,0);
}

  ngOnInit() {
    this.vid.getVid().subscribe(currentSource =>{ this.source = currentSource});
    console.log(this.source);
    
   this.categoriaToFilter=this.vid.getFromLocal('key');
   this.videoService.filterBy(this.categoriaToFilter).subscribe( vlogvids =>{
      this.vlogvids = vlogvids;
     
     
  });
   let id = this.route.snapshot.paramMap.get('id');
   this.val=id;
   console.log(this.val);
   this.source=id;
  }
  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
  setDrip(vlogvid) {
    this.drip=vlogvid.url;
  }
  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }
   getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
   }
   changeVid(vlogvid){
     this.drip=vlogvid.url;
  }
  refresh(): void {
    window.location.reload();
}
playVid(vlogvid){
  this.vid.changeVid(vlogvid.url);
  this.vid.saveInLocal('key',vlogvid.vlogerId);
}
  
}
