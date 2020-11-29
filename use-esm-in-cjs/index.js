const { sumCJS } = require('../cjs-library/add.js');

// import returns a promise, because esm module are asynchronous
import(('../esm-library/add.js')).then(esmModule => console.log('esm with import:', esmModule.sumESM(2, 2)));

const x = require('../esm-library/commonjs/add.js');

console.log('cjs:', sumCJS(2, 2));
console.log('esm transpiled in cjs:', x.sumESM(2, 2));