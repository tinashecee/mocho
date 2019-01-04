import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Video } from '../models/video';
import { Vlogvideo } from '../models/vlogvideo';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import {Tweet} from '../models/tweet';
import {Music} from '../models/music';
import {Toptweet} from '../models/toptweet';
import {News} from '../models/news';
import {Event} from '../models/events';
import {Tv} from '../models/Tv';
import {Lv} from '../models/Lv';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
videosCollection: AngularFirestoreCollection<Video>;
videoDoc: AngularFirestoreDocument<Video>;
videos:Observable<Video[]>;
//for vlogs
videosCollection1: AngularFirestoreCollection<Vlogvideo>;
vlogvids:Observable<Vlogvideo[]>;
newsCollection: AngularFirestoreCollection<News>;
news:Observable<News[]>;
eventsCollection: AngularFirestoreCollection<Event>;
events:Observable<Event[]>;
topeventsCollection: AngularFirestoreCollection<Event>;
topevents:Observable<Event[]>;
eventsCollection1: AngularFirestoreCollection<Event>;
events1:Observable<Event[]>;
videosCollection2: AngularFirestoreCollection<Vlogvideo>;
vlogvids2:Observable<Vlogvideo[]>;
tweetCollection: AngularFirestoreCollection<Tweet>;
tweet:Observable<Tweet[]>;
toptweetCollection: AngularFirestoreCollection<Toptweet>;
toptweet:Observable<Toptweet[]>;
musicCollection: AngularFirestoreCollection<Video>;
music:Observable<Video[]>;
latestvideosCollection: AngularFirestoreCollection<Lv>;
latestvideos:Observable<Lv[]>;
latestmusicCollection: AngularFirestoreCollection<Lv>;
latestmusic:Observable<Lv[]>;
latestartsCollection: AngularFirestoreCollection<Lv>;
latestarts:Observable<Lv[]>;
topvideosCollection: AngularFirestoreCollection<Tv>;
topvideos:Observable<Tv[]>;
topvideoDoc: AngularFirestoreDocument<Tv>;
topvideo:Observable<Tv>;
topmusicCollection: AngularFirestoreCollection<Tv>;
topmusic:Observable<Tv[]>;
topmusicDoc: AngularFirestoreDocument<Tv>;
topmusic1:Observable<Tv>;
topartsCollection: AngularFirestoreCollection<Tv>;
toparts:Observable<Tv[]>;
topartDoc: AngularFirestoreDocument<Tv>;
topart:Observable<Tv>;


  constructor(public afs:AngularFirestore) { 
    this.videosCollection = this.afs.collection('videos');
    this.videos = this.videosCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Video;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
 
    this.videosCollection2 = this.afs.collection('vlogvideos');
    this.vlogvids2 = this.videosCollection2.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Vlogvideo;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.toptweetCollection = this.afs.collection('toptweets');
    this.toptweet = this.toptweetCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Toptweet;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.eventsCollection = this.afs.collection('events');
    this.events = this.eventsCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Event;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topeventsCollection = this.afs.collection('topevents');
    this.topevents = this.topeventsCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Event;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.latestvideosCollection = this.afs.collection('latestvideos');
    this.latestvideos = this.latestvideosCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Lv;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.latestmusicCollection = this.afs.collection('latestmusic');
    this.latestmusic = this.latestmusicCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Lv;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.latestartsCollection = this.afs.collection('latestarts');
    this.latestarts = this.latestartsCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Lv;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topvideosCollection = this.afs.collection('topvideos');
    this.topvideos = this.topvideosCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Tv;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topvideoDoc = this.afs.collection('topvideos').doc('prof');
    
    this.topvideo=this.topvideoDoc.valueChanges()
    

    this.topmusicCollection = this.afs.collection('topmusic');
    this.topmusic = this.topmusicCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Tv;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topmusicDoc = this.afs.collection('topmusic').doc('prof');
    this.topmusic1=this.topmusicDoc.valueChanges();

    this.topartsCollection = this.afs.collection('toparts');
    this.toparts = this.topartsCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Tv;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topartDoc = this.afs.collection('toparts').doc('prof');
    this.topart=this.topartDoc.valueChanges();
    
    
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
  getTopvideo(){
    return this.topvideo;
  }
  getTopmusic(){
    return this.topmusic;
  }
  getTopmusic1(){
    return this.topmusic1;
  }
  getToparts(){
    return this.toparts;
  }
  getTopart(){
    
    return this.topart;
  }
  getTopevents(){
    return this.topevents;
  }
  getEvents(){
    return this.events;
  }
  getToptweets(){
    return this.toptweet;
  }
  getVideos(){
    return this.videos;
  }
  getVideos2(){
    return this.vlogvids2;
  }
  filterBy(categoriaToFilter: string) {
    this.videosCollection1 = this.afs.collection('vlogvideos', ref => ref.where('vlogerId','==', categoriaToFilter ));
    this.vlogvids = this.videosCollection1.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Vlogvideo;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.vlogvids;
  };
  filterBy1(categoriaToFilter: string) {
    this.musicCollection = this.afs.collection('videos', ref => ref.where('category','==', categoriaToFilter ));
    this.music = this.musicCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Video;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.music;
  };
  filterBy2(categoriaToFilter: string) {
    
    this.tweetCollection = this.afs.collection('tweets', ref => ref.where('genre','==', categoriaToFilter ));
    this.tweet = this.tweetCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Tweet;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.tweet;
  };
  filterBy3(categoriaToFilter: string) {
    this.newsCollection = this.afs.collection('news', ref => ref.where('genre','==', categoriaToFilter ));
    this.news = this.newsCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.news;
  };
  filterBy4(categoriaToFilter: string) {
    this.eventsCollection1 = this.afs.collection('events', ref => ref.where('category','==', categoriaToFilter ));
    this.events1 = this.eventsCollection1.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Event;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.events1;
  };

 
}
