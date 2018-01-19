import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';

//when do we import components and when do we import modules?
//why do we import certain components in the decorator but not others?

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    InternalDefensesModule,
    ExternalDefensesModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
