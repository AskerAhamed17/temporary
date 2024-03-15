const path = require('path');

console.log(path.sep);

const filepath = path.join('/parent','child','test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname,'parent','child','test.txt');
console.log(absolute);