import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule,MatCardModule,MatGridListModule,MatToolbarModule,MatSidenavModule,MatButtonToggleModule,MatIconModule,MatButtonModule,MatInputModule,MatListModule,MatTabsModule} from '@angular/material';
import { StorageServiceModule} from 'angular-webstorage-service';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from '../events/events.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
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
  declarations: [EventsComponent]
})
export class EventsModule { }
