import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MigraineListComponent } from './components/migraine-list/migraine-list.component';
import { MigraineService } from './services/migraine.service';
import { HttpClientModule}  from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MigraineListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],

  providers: [
    MigraineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
