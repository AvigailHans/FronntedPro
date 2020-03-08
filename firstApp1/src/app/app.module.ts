
import { FilterrrPipe } from './filterrr.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MarketComponent } from 'src/app/market/market.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { LaiberyComponent } from './laibery/laibery.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BorderDirectiveDirective } from './border-directive.directive';
import {JokesService} from './jokes.service';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { ShortPipe } from './short.pipe';
import { EnterComponent } from './enter/enter.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { concat } from 'rxjs/internal/observable/concat';
import { from } from 'rxjs/internal/observable/from';
import { CtestComponent } from './ctest/ctest.component';
import { StatistictestComponent } from 'src/app/statistictest/statistictest.component';
import { AlgebratestComponent } from 'src/app/algebratest/algebratest.component';
import { RouterModule, Routes } from '@angular/router';
import { ClassifyComponent } from './classify/classify.component';
import { LogComponent } from './log/log.component';
import { Direcive1Directive } from './directive/direcive1.directive';
import { Router } from '@angular/router/src/router';


import { HttpClientModule} from '@angular/common/http';
import { PhoneDirective } from './directive/phone.directive';
import { QuestionListComponent } from './question-list/question-list.component';
import { CommentComponent } from './comment/comment.component';
 const pp:Routes=[ 
{path:"",component:LogComponent},
 {path:'main',component:ShowQuestionComponent, children:[
 {path:'c',component:CtestComponent},
  {path:'algebra',component:AlgebratestComponent},
  {path:'statistic',component:StatistictestComponent},
  {path:'classify/:name',component:ClassifyComponent}
 ]}
            ];
@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    ShowQuestionComponent,
    CtestComponent,
    AlgebratestComponent,
    StatistictestComponent,
    ClassifyComponent,
    LogComponent,
    Direcive1Directive,
    PhoneDirective,
    QuestionListComponent,
    ShortPipe,
    FilterrrPipe,
    CommentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(pp)
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
