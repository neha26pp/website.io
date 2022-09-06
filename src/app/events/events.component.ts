import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { EventInput } from '@fullcalendar/angular';

export const eventID:string[] = [];
export const eventTitle:string[] = [];
export const eventStart:string[] = [];
export const eventEnd:string[] = [];
export const eventAllDay:boolean[] = [];

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const adminName = prompt('Enter admin name');

    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection


    if (this.adminAuth(adminName)) {
      const title = prompt('Enter event title')
      if(title){
          //const eventTitle = prompt('Enter the event title:')
          const eventId = createEventId();
        calendarApi.addEvent({
          id: eventId,
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        });
        eventID.push(eventId);
        eventStart.push(selectInfo.startStr);
        eventEnd.push(selectInfo.endStr);
        eventAllDay.push(selectInfo.allDay);
        // INITIAL_EVENTS.push(calendarApi.);
        // INITIAL_EVENTS.push({
        //   id: eventId,
        //   title,
        //   start: selectInfo.startStr,
        //   end: selectInfo.endStr,
        //   allDay: selectInfo.allDay
        // })
      }
    }
    else {
      alert('You are not an admin so you don\'t get access')
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    const adminName = prompt('Enter admin name');
    if (this.adminAuth(adminName)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  adminAuth(password: string | null) {
    if (password == environment.ADMIN_PASSWORD) {
      return true;
    } else {
      return false;
    }
  }
}
