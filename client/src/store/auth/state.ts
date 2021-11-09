export interface AuthStateInterface {
  uid?: string;
  email?: string;
  displayName?: string;
  isLoggedIn: boolean;
}

function state(): AuthStateInterface {
  return {
    isLoggedIn: false
  }
};

export default state;
