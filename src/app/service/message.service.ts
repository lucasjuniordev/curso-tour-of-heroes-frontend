import { Injectable } from '@angular/core';
import { clear } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  add (message: string): void{
    this.messages.push(message);
  }

  clear(): void{
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
