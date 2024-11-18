import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SocketService } from '../../services/socket.service';
import { MediaService } from '../../services/media.service';
import { Message, ChatGroup } from '../../models/types';
import { addIcons } from 'ionicons';
import { attach, send, peopleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class ChatComponent  implements OnInit {
  currentUser = 'user123';
  messages: Message[] = [];
  groups: ChatGroup[] = [];
  selectedGroup: ChatGroup | null = null;
  newMessage = '';

  constructor(
    private socketService: SocketService,
    private mediaService: MediaService
  ) {
    addIcons({ attach, send, peopleOutline });
  }

  ngOnInit() {
    this.socketService.connect();
    this.loadDummyData();
    this.listenToMessages();
  }

  private loadDummyData() {
    this.groups = [
      {
        id: '1',
        name: 'Project Team',
        members: [],
        avatar: 'assets/group1.jpeg'
      },
      {
        id: '2',
        name: 'Family',
        members: [],
        avatar: 'assets/group1.jpeg'
      }
    ];

    this.messages = [
      {
        id: '1',
        content: 'Hello everyone!',
        sender: 'user456',
        timestamp: new Date(),
        type: 'text'
      },
      {
        id: '2',
        content: 'Hi there!',
        sender: 'user123',
        timestamp: new Date(),
        type: 'text'
      }
    ];
  }

  private listenToMessages() {
    this.socketService.getMessages().subscribe(message => {
      if (message) {
        this.messages.push({
          id: Date.now().toString(),
          ...message,
        });
      }
    });
  }

  selectGroup(group: ChatGroup) {
    this.selectedGroup = group;
  }

  leaveGroup(group: ChatGroup) {
    this.groups = this.groups.filter(g => g.id !== group.id);
    if (this.selectedGroup?.id === group.id) {
      this.selectedGroup = null;
    }
  }

  async attachMedia() {
    // Simulate file selection
    const file = new File([""], "dummy-image.jpg", { type: "image/jpeg" });
    const mediaUrl = await this.mediaService.uploadMedia(file);
    
    this.socketService.sendMessage({
      content: '',
      type: file.type.includes('image') ? 'image' : 'video',
      mediaUrl
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.socketService.sendMessage({
        text: this.newMessage,
        type: 'text'
      });
      this.newMessage = '';
    }
  }
}
