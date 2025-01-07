import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'ng-book-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') ngClass='row';
  @HostBinding('attr.style') ngStyle='width:67%!important; margin:0 auto;';
  @Input() article!: Article;

  constructor() {}

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
      this.article.voteDown();
      return false;
  }

  ngOnInit(): void {}

}
