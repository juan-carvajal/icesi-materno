import { UserData } from 'src/models/users';


export interface AuthStateInterface {
  uid?: string;
  email?: string;
  isEmailVerified: boolean;
  displayName?: string;
  isLoggedIn: boolean;
  permissions: Array<string>
  roleName?: string,
  userData?: UserData
}

function state (): AuthStateInterface {
  return {
    isLoggedIn: false,
    permissions: [],
    userData: {},
    isEmailVerified: false
  }
};

export default state;
