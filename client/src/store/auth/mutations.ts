/* eslint-disable @typescript-eslint/no-unused-vars */
import { MutationTree } from 'vuex';
import { AuthStateInterface } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  setUserProps (state: AuthStateInterface, user: AuthStateInterface) {
    Object.assign(state,{...user, isLoggedIn: true})
  },
  logUserOut (state: AuthStateInterface) {
    Object.assign(state,{ isLoggedIn: false })
  }
};

export default mutation;
