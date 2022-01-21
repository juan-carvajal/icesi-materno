import { Timestamp, FieldValue } from 'firebase/firestore';

export interface Chat {
  participants: Array<string>;
  name?: string;
  lastUpdated: Date;
  ID?: string;
}

export interface ChatMessage {
  sender: string;
  message: string;
  senderEmail?:string;
  sentDate: Timestamp;
}

export interface ChatMessageWrite {
  sender: string;
  senderEmail?:string;
  message: string;
  sentDate: FieldValue;
}
