import { Timestamp } from 'firebase/firestore';
import { User } from './auth';

export interface CaseComment {
  text: string;
  createdAt: Date | Timestamp;
  createdBy: User;
  caseID: string;
}
