var id = 1;
function generateUkey () {
    return ('u' + id ++);
}

/******* data.js actions *********/
export const INIT_ACT = generateUkey();

/******* view.js actions *********/


/******* data.js mutations *********/
export const INIT_MUT = generateUkey();

/******* view.js mutations *********/
