/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserData } from 'src/models/users';
import { MutationTree } from 'vuex';
import { AuthStateInterface } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  setUserProps (state: AuthStateInterface, user: AuthStateInterface) {
    Object.assign(state, { ...user, isLoggedIn: true })
  },
  setUserData (state: AuthStateInterface, userData: UserData) {
    Object.assign(state, { ...state, userData })
  },
  logUserOut (state: AuthStateInterface) {
    Object.assign(state, { isLoggedIn: false })
  }
};

export default mutation;
