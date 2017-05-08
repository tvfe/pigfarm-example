import dataStore from './stores/data';
import viewStore from './stores/view';

module.exports = {
    state: {
        ...dataStore.state,
        ...viewStore.state
    },
    getters: {
        ...dataStore.getters,
        ...viewStore.getters
    },
    mutations: {
        ...dataStore.mutations,
        ...viewStore.mutations
    },
    actions: {
        ...dataStore.actions,
        ...viewStore.actions
    }
};