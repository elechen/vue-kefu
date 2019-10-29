// profile/actions.ts
import { ActionTree } from 'vuex';
// import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '@/store/types';

const actions: ActionTree<ProfileState, RootState> = {
  authenticate({ commit }): any {
        // axios({
        //     url: 'https://....'
        // }).then((response) => {
        //     const payload: User = response && response.data;
        //     commit('profileLoaded', payload);
        // }, (error) => {
        //     console.log(error);
        //     commit('profileError');
        // });
  }
};

export default actions;
