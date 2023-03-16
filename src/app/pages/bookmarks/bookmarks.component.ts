import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AppService } from '../../services/app.service';
import { Article } from '../../models/news';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  bookmarks: number[] = JSON.parse(localStorage.getItem('bookmark')) || [];
  isLoading: boolean;
  articles: Article[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getSearchApi().subscribe(
      (res) => {
        this.isLoading = false
        this.articles = res.articles.filter((element, index) => {
          return this.bookmarks.includes(index)
        });
      },
      (err) => {
        this.isLoading = false
        // this.showMessage(this.errorMessage.message || 'An unknown error occured', "danger")
      }
    );
  }

}
