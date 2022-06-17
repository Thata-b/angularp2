import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThaishomeComponent } from './thaishome/thaishome.component';
import { ThaistasksComponent } from './thaistasks/thaistasks.component';
import { ThaistasksService } from './thaistasks.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
    {path: '', component: ThaishomeComponent},
    {path: 'thaistasks', component: ThaistasksComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, ThaishomeComponent, ThaistasksComponent ],
  providers: [ThaistasksService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
