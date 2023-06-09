import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducers';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomInputComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }