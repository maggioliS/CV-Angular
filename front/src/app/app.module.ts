import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { CardComponent } from './shared/card/card.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { FormComponent } from './shared/form/form.component';
import { UpdateComponent } from './update/update.component';
import { NaPipe } from './shared/pipes/na.pipe';
import { BadgeDirective } from './shared/directives/badge.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    PeopleComponent,
    CardComponent,
    DialogComponent,
    FormComponent,
    UpdateComponent,
    NaPipe,
    BadgeDirective
  ],
  entryComponents: [ DialogComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
