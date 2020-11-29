import { sumESM } from '../esm-library/add.js';
import cjsModule from '../cjs-library/add.js';

// Syntax error!
// CommonJS does not support named exports
// import { sumCJS } from '../cjs-library/add.js';

console.log('esm:', sumESM(2, 2));
console.log('cjs:', cjsModule.sumCJS(2, 2));