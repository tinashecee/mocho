import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import {Event} from '../models/events';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events:Event[];
  constructor(public videoService:VideoService) { 
    window.scroll(0,0);
  }

  ngOnInit() {
    this.videoService.getEvents().subscribe(events =>{ this.events = events});
    
  }

}
