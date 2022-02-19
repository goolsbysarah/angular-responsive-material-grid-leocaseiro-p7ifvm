import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule
  ],

  declarations: [
    AppComponent,
    GridComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
