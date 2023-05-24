import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }