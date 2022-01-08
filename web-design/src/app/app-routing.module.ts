import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'calendar', component: CalendarComponent},
  { path: '', redirectTo: '/aboutuspage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
