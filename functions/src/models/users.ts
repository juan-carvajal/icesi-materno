export enum DocumentType{
  CEDULA = 'Cédula de ciudadanía',
  PEP = 'Permiso especial de permanencia'
}


export interface UserData{
  phone?: string,
  age?: number,
  documentType?: DocumentType,
  documentNumber?:string,
  firstName?: string,
  lastName?:string
  email?:string;
  readonly uid? :string;
}


export interface User {
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
}