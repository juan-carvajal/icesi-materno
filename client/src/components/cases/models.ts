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
  email: string,
  uid: string
}

export interface Case {
  ID: string,
  title: string,
  type: CaseType,
  state: CaseState,
  created: Date,
  lastUpdateState: Date,
  readonly assignee: CaseUser,
  reported: CaseUser,
  priority: CasePriority
}
