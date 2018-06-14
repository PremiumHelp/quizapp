import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {RestProvider} from '../providers/rest/rest';
import {AddQuizPage} from '../pages/add-quiz/add-quiz';
import {QuizPage} from '../pages/quiz/quiz';
import {SessionPage} from '../pages/session/session';
import {GamePage} from '../pages/game/game';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddQuizPage,
    QuizPage,
    SessionPage,
    GamePage
  ],
  imports: [
    BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddQuizPage,
    QuizPage,
    SessionPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    RestProvider
  ]
})
export class AppModule {}