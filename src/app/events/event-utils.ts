import { EventApi, EventInput } from '@fullcalendar/angular';
// import { eventID } from 'src/app/events/events.component';
// import { eventTitle } from 'src/app/events/events.component';
// import { eventStart } from 'src/app/events/events.component';
// import { eventEnd } from 'src/app/events/events.component';
// import { eventAllDay } from 'src/app/events/events.component'

let eventGuid = 1;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Hackathon 2.0',
    start: new Date('2022-09-03').toISOString().replace(/T.*$/, ''), //'2022-09-03 16:00:00:00'
    end: new Date('2022-09-06').toISOString().replace(/T.*$/, ''),
    allDay: true
  },
  {
    id: createEventId(),
    title: 'TED Talk Night',
    start: new Date('2022-09-10 21:00:00:00')
  },
  {
    id: createEventId(),
    title: 'TED Talk Night',
    start: new Date('2022-09-24 21:00:00:00')
  }
];

// function updateInitialEvents() {
//   var i = 0;
//   while(eventID[i]) {
//     INITIAL_EVENTS.push({
//       id: eventID[i],
//       title: eventTitle[i],
//       start: eventStart[i],
//       end: eventEnd[i],
//       allDay: eventAllDay[i]
//     })
//   }
// }

export function createEventId() {
  return String(eventGuid++);
}
