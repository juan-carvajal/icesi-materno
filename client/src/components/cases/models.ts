import { Timestamp } from 'firebase/firestore';

export enum CaseType {
  MEDICAL = 'Médico',
  ADMINISTRATIVE = 'Administrativo'
}

export enum CaseState {
  TODO = 'Por Hacer',
  IN_PROGRESS = 'En Progreso',
  BLOCKED = 'Bloqueados',
  RESOLVED = 'Resueltos'
}

export enum CasePriority {
  LOW = 0,
  NORMAL,
  HIGH
}

export interface CaseUser {
  email?: string,
  uid?: string
}

export interface CaseAttachment {
  path?: string,
  mimeType?: string,
  size?: number,
  description?: string,
  file?: File,
  uploadedBy?: string
}

export interface Case {
  ID?: string,
  title: string,
  description?: string,
  type: CaseType,
  state: CaseState,
  created: Date | Timestamp,
  lastUpdateState: Date | Timestamp,
  assignee?: CaseUser,
  readonly reported: CaseUser,
  priority: CasePriority,
  patient?: CaseUser,
  attachments?: CaseAttachment[]
}
