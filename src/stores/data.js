import {
    INIT_ACT,
    INIT_MUT
} from './../consts';

import {
    copyStrings
} from './../modules/storeHelper';

module.exports = {
    state: {
        name: '',
        age: '',
        sex: '',
        description: ''
    },
    mutations: {

        [INIT_MUT] (state, data) {
            copyStrings(data, state, 'name', 'age', 'sex', 'description');
        }

    },
    actions: {

        [INIT_ACT] ({commit}) {
            setTimeout(() => {
                commit(INIT_MUT, {
                    name: 'heheheh',
                    age: '18',
                    sex: 'man',
                    description: 'nothing'
                });
            }, 2000);
        }

    }
};