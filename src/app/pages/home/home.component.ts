import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Article, ErrorBase } from '../../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'dot-pay-test';
  articles: Article[] = [];
  errorMessage: ErrorBase;
  bookmarks: number[] = JSON.parse(localStorage.getItem('bookmark')) || [];
  isLoading: boolean = true;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.getSearchApi().subscribe(
      (res) => {
        this.isLoading = false
        this.articles = res.articles;
      },
      (err) => {
        this.isLoading = false
        this.errorMessage = err.error;
        this.showMessage(this.errorMessage.message || 'An unknown error occured', "danger")
      }
    );
  }

  showMessage(message, type) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    let wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder.append(wrapper);
    setTimeout(() => {
      wrapper.innerHTML = [
      ].join('');

    }, 3000);
  }

  onAddToBookmark(articleIndex) {
    if (this.bookmarks.includes(articleIndex)) {
    this.showMessage('this article has already been added to bookmarks', 'info');
    return;
    }
    this.bookmarks.push(articleIndex);
    localStorage.setItem('bookmark', JSON.stringify(this.bookmarks));
    this.showMessage('Nice, you added this article to bookmarks', 'success');
  }
}
