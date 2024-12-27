import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from './article/article.model';

@Component({
  selector: 'ng-book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  articles: Article[];
  newTitle = "Lynn's Reddit-like App"

  constructor(private titleService: Title) {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);//this is an ES6 backtick string and is used to expand template variables (interpolate) in this string (template expansion string)
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  ngOnInit() {
    this.titleService.setTitle(this.newTitle);
  }
  
}
