import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../services/socket.service';
import { Announcement } from 'src/app/models/types';
import { addIcons } from 'ionicons';
import { create, time, trash, add } from 'ionicons/icons';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class AnnouncementsComponent  {


  constructor(){
    addIcons({ create, time, trash, add});

  }
  announcements: Announcement[] = [
    {
      id: '1',
      title: 'Company Update',
      content: 'We are excited to announce a new initiative...',
      timestamp: new Date('2023-05-01')
    },
    {
      id: '2',
      title: 'Upcoming Holiday',
      content: 'The office will be closed for the upcoming holiday...',
      timestamp: new Date('2023-06-10')
    }
  ];

  createAnnouncement() {
    // Implement announcement creation logic
  }

  updateAnnouncement(announcement: Announcement) {
    // Implement announcement update logic
  }

  deleteAnnouncement(announcement: Announcement) {
    // Implement announcement deletion logic
  }
}
