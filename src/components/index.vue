<template>
    <div>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{sex}}</p>
        <p>{{description}}</p>
    </div>
</template>

<script>

import {
    INIT_ACT
} from './../consts';

const mapState = Vuex.mapState;

module.exports = Vue.component('p-main', {

    computed: mapState(['name', 'age', 'sex', 'description']),

    mounted () {
        if (window._vuexState) {
            this.$store.replaceState(window._vuexState);
        } else {
            this.$store.dispatch(INIT_ACT);
        }
    }

});

</script>