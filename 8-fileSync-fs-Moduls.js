const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./parent/first.txt','utf8');
const second = readFileSync('./parent/second.txt','utf8');

writeFileSync('./parent/third-result.txt'," Append text ",{flag: 'a'})

console.log(first);


