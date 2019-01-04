import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared.module';
import { MusikRoutingModule } from './musik-routing.module';
import { MusikComponent } from './musik.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { VideoService} from './../services/video.service'
import { SafeUrlPipe } from '../pipes/pipes';
import { VlogprofileComponent } from '../vlogprofile/vlogprofile.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { OwlModule } from 'ngx-owl-carousel';
import { VideoListComponent } from '../video-list/video-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterdataPipe } from '../filterdata.pipe';
import {MatDividerModule,MatCardModule,MatGridListModule,MatToolbarModule,MatSidenavModule,MatButtonToggleModule,MatIconModule,MatButtonModule,MatInputModule,MatListModule,MatTabsModule} from '@angular/material';
import { StorageServiceModule} from 'angular-webstorage-service';
@NgModule({
  imports: [
    CommonModule,
    MusikRoutingModule,
    SharedModule,
    NgbModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,'Mocho1'),
    Ng2CarouselamosModule,
    NguCarouselModule,
    OwlModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    StorageServiceModule,
    MatDividerModule,
    HttpModule,
    FormsModule
  ],
  declarations: [MusikComponent]
})
export class MusikModule { }
