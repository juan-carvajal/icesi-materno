import { User } from "./users";


export enum AlertDeliveryMethod {
  SMS_ONLY = 'Solo SMS',
  CALL_ONLY = 'Solo llamada',
  BOTH = 'Ambos'
}

export interface Alert {
  createdAt?: Date | FirebaseFirestore.Timestamp;
  createdBy?: User;
  description: string;
  acknowledgedBy?: User;
  acknowledgedAt?: Date | FirebaseFirestore.Timestamp;
  targetRoleIDs: string[];
  deliveryMethod: AlertDeliveryMethod;
  id?: string;
  emergencyContact: string;
  relatedCaseID?: string;
}
