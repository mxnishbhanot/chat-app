import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Event } from '../../models/types';
import { addIcons } from 'ionicons';
import { add, location } from 'ionicons/icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class EventsComponent  {

  constructor(
  ) {
    addIcons({ add, location });
  }

  events: Event[] = [
    {
      id: '1',
      title: 'Team Outing',
      description: 'Join us for a fun team outing!',
      date: new Date('2023-06-15'),
      location: 'Central Park'
    },
    {
      id: '2',
      title: 'Company Picnic',
      description: 'Enjoy a day of food, games, and camaraderie.',
      date: new Date('2023-07-20'),
      location: 'Riverside Park'
    }
  ];

  createEvent() {
    // Implement event creation logic
  }

  updateEvent(event: Event) {
    // Implement event update logic
  }

  deleteEvent(event: Event) {
    // Implement event deletion logic
  }
}
