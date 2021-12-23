export interface FirebaseConfig {
  databaseURL: string;
  storageBucket: string;
  projectId: string;
}

export interface Role {
  ID: string,
  name: string,
  permissions: Array<string>
}

export interface CaseUser {
  email?: string,
  uid?: string
}