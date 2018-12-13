import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { SliderComponent } from './slider/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstComponent } from './components/first/first.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '1', component: FirstComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    SliderComponent,
    NavbarComponent,
    FirstComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragScrollModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
