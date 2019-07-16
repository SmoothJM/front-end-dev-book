const fs = require('fs');
const mime = require('mime');
const path = require('path');
const url = require('url');
const extract = require('./extract');

function errorHandler(err,res){
  res.writeHead(404);
  fs.readFile('./app/404.html',(error,data)=>{
    if (error) throw error;
    res.end(data);
  });
};

function readData(urlReq,res){
  let filePath = extract(urlReq);
  let mimeType = mime.getType(path.extname(url.parse(urlReq).pathname));
  fs.readFile(filePath,(err,data)=>{
    if (err){
      errorHandler(err,res);
      return;
    }else{
      res.setHeader('Content-Type',mimeType);
      res.end(data);
    }
  });
};

module.exports = readData;
