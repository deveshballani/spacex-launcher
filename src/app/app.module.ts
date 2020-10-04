import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './@core/services/api.service';
import { MainService } from './@core/services/main.service';
import { HomeComponent } from './pages/home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MissionComponent } from './@data/view/mission/mission.component';
import { HeaderComponent } from './@data/view/header/header.component';
import { ScrollBackgroundDirective } from './@data/directives/scroll-background.directive';
import { FiltersComponent } from './@data/view/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterDialogComponent } from './@data/dialogs/filter-dialog/filter-dialog.component';
import { FooterComponent } from './@data/view/footer/footer.component';

const MATERIAL_MODULES = [
  MatIconModule,
  MatBadgeModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    HeaderComponent,
    ScrollBackgroundDirective,
    FiltersComponent,
    FilterDialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    ApiService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
