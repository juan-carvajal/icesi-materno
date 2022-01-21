import { User } from 'src/models/auth';
import { Timestamp } from 'firebase/firestore';

export enum AlertDeliveryMethod {
  SMS_ONLY = 'Solo SMS',
  CALL_ONLY = 'Solo llamada',
  BOTH = 'Ambos'
}

export interface Alert {
  createdAt?: Date | Timestamp;
  createdBy?: User;
  description: string;
  acknowledgedBy?: User;
  acknowledgedAt?: Date | Timestamp;
  targetRoleIDs: string[];
  deliveryMethod: AlertDeliveryMethod;
  id?: string;
  emergencyContact: string;
  relatedCaseID?: string;
}
