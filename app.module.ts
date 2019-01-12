import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { VideoService} from './services/video.service'
import { SafeUrlPipe } from './pipes/pipes';
import { VlogprofileComponent } from './vlogprofile/vlogprofile.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { OwlModule } from 'ngx-owl-carousel';
import { VideoListComponent } from './video-list/video-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterdataPipe } from './filterdata.pipe';
import {MatDividerModule,MatCardModule,MatGridListModule,MatToolbarModule,MatSidenavModule,MatButtonToggleModule,MatIconModule,MatButtonModule,MatInputModule,MatListModule,MatTabsModule} from '@angular/material';
import { WINDOW_PROVIDERS } from './services/window.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { EventsComponent } from './events/events.component'
import {SharedModule}  from './shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgxTweetModule } from "ngx-tweet";
const appRoutes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'motion',loadChildren:'./motion/motion.module#MotionModule'},
  {path:'musik',loadChildren:'./musik/musik.module#MusikModule'},
  {path:'arts',loadChildren:'./artz/artz.module#ArtzModule'},
  {path:'events',loadChildren:'./events/events.module#EventsModule'},
  {path:'videos/:id',component:VideoListComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoListComponent
  ],
  imports: [
    NgxTweetModule,
    DragScrollModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,'Mocho1'),
    Ng2CarouselamosModule,
    NguCarouselModule,
    OwlModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatIconModule,MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    StorageServiceModule,
    MatDividerModule
  ],
  providers: [VideoService,WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
