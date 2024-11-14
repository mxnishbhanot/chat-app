export interface User {
    id: string;
    name: string;
    avatar?: string;
  }
  
  export interface Message {
    id: string;
    content: string;
    sender: string;
    timestamp: Date;
    type: 'text' | 'image' | 'video';
    mediaUrl?: string;
  }
  
  export interface ChatGroup {
    id: string;
    name: string;
    members: User[];
    avatar?: string;
    lastMessage?: Message;
  }
  
  export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
  }

  export interface Announcement {
    id: string;
    title: string;
    content: string;
    timestamp: Date;
  }