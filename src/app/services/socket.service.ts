import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Message } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private mockSocket = new BehaviorSubject<any>(null);
  private connected = false;

  connect() {
    this.connected = true;
    // Simulate socket connection
    console.log('Socket connected');
  }

  sendMessage(message: any) {
    if (this.connected) {
      // Simulate message sending
      setTimeout(() => {
        this.mockSocket.next({
          type: message.type,
          text: message.text,
          timestamp: new Date(),
          sender: 'user123'
        });
      }, 100);
    }
  }

  getMessages(): Observable<any> {
    return this.mockSocket.asObservable();
  }
}
