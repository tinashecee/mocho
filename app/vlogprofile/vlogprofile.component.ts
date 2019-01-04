import { Component, OnInit, Inject } from '@angular/core';
import { VidService } from '../services/vid.service';
import { VideoService } from '../services/video.service';
import { Vlogvideo } from '../models/vlogvideo';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore} from 'angularfire2/firestore';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';



@Component({
  selector: 'app-vlogprofile',
  templateUrl: './vlogprofile.component.html',
  styleUrls: ['./vlogprofile.component.css']
})
export class VlogprofileComponent implements OnInit {
  categoriaToFilter:string; 
  val:any;
  
  drip :string; 
  vlogvids:Vlogvideo[];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private vid:VidService,private videoService:VideoService ,public route:ActivatedRoute) { 
    window.scroll(0,0);
  }

  ngOnInit() {
    
  let id = this.route.snapshot.paramMap.get('id');
  this.categoriaToFilter=id;
  console.log(id);
    this.videoService.filterBy(this.categoriaToFilter).subscribe( vlogvids =>{
      this.vlogvids = vlogvids;
     
  });
  }
  setDrip(vlogvid) {
    this.drip=vlogvid.url;
  }

}
