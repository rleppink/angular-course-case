// Angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


// Modules
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';


// Services
import { RijksApiService } from './rijks-api.service';
import { SecretService } from './secret.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BrowsePageComponent,
    FavoritesPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
    providers: [RijksApiService, SecretService],
  bootstrap: [AppComponent]
})
export class AppModule { }
