import html from './index.html';
import {
    INIT_ACT,
    INIT_MUT
} from './../src/consts';
import storeConfig from './../src/stores/data';
import './../src/components';

const SSR = vsr.createRenderer();

Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);
var vueObj = new Vue({
    template: html,
    store
});

http
    .createServer(function (req, res) {

        store.dispatch(INIT_ACT);
        store.subscribe((mutation, state) => {
            if (mutation.type == INIT_MUT) {
                SSR.renderToString(vueObj, function(error, bodyStr) {
                    if (error) {
                        res.writeHead(500, {'content-type': 'text/plain'});
                        res.end(error.stack)
                    } else {
                        res.writeHead(200, {'content-type': 'text/html'});
                        bodyStr = bodyStr.replace('__super_flag__', JSON.stringify(state));
                        res.end(bodyStr);
                    }
                });
            }
        });

    })
    .listen(8083);