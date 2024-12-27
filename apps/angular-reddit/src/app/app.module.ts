import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { UserInterfaceModule } from '@ng-book/user-interface';

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [
    UserInterfaceModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
