import storeConfig from './store';
import './components';

const store = new Vuex.Store(storeConfig);

new Vue({
    el: '#app',
    store
});