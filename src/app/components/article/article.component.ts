import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Article } from '../../models/news';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input("bookmarks") bookmarks: number[] = [];
  @Input("article") article: Article;
  @Input("index")i: number;
  @Input("showActionButtons")showActionButtons: boolean = true;
  @Output() addToBookmark = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToBookmark(articleIndex) {
    this.addToBookmark.emit(articleIndex)
  }

}
