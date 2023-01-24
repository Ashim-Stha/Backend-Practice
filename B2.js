const fs = require('fs');
const { text } = require('stream/consumers');
let txt = fs.readFileSync('hello.txt','utf-8');
console.log(txt);

txt = txt.replace('Hello','Hi');
console.log(txt);

console.log('Creating a new file...')
let ntxt = fs.writeFileSync('B2.txt','Hello there');
