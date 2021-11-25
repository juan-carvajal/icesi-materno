export enum CaseType {
  MEDICAL = 'Médico',
  ADMINISTRATIVE = 'Administrativo'
}

export enum CaseState {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  BLOCKED = 'BLOCKED',
  RESOLVED = 'RESOLVED'
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
  assignee: CaseUser,
  reported: CaseUser,
  priority: CasePriority
}
