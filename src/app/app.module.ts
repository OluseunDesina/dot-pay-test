import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { ArticleComponent } from './components/article/article.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingDataComponent } from './components/loading-data/loading-data.component';
import { NoDataComponent } from './components/no-data/no-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    ArticleComponent,
    BaseLayoutComponent,
    HomeComponent,
    NoDataComponent,
    LoadingDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
