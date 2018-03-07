// Angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


// Modules
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { SearchComponent } from './search/search.component';
import { ArtObjectComponent } from './art-object/art-object.component';


// Services
import { RijksApiService } from './services/rijks-api.service';
import { SecretService } from './services/secret.service';
import { FavoritesService } from './services/favorites.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    FavoritesPageComponent,
    SearchComponent,
    ArtObjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
    providers: [RijksApiService, SecretService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
