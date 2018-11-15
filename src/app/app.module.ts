import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {QuizComponent} from './quiz/quiz.component';
import {ContactComponent} from './contact/contact.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogItemTextComponent } from './blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './blog-item-detail/blog-item-detail.component';
import { BlogItemListComponent } from './blog-item-list/blog-item-list.component';
import { BlogItemTitleComponent } from './blog-item-title/blog-item-title.component';
import { HttpClientModule } from '@angular/common/http';
import {BlogService} from "./services/blog.service";
import { FilterPipe } from './pipes/filter.pipe';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogItemListComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    BlogItemListComponent,
    BlogItemTitleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
