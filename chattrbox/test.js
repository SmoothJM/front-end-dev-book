const path = require('path');
const url = require('url');
const mime = require('mime');

let p = path.resolve('app','index.html');
p = path.extname(url.parse('app/indes.html?111').pathname);

let mimeType = mime.getType(p);
console.log(mimeType);
