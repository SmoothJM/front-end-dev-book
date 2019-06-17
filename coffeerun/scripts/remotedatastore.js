(function (window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDatastore(url){
    if (!url) {
      throw new Error('No remote URL supplied');
    }

    this.serverUrl = url;
  }
  RemoteDatastore.prototype.add = function(key,val){
      return $.post(this.serverUrl, val, function(serverResponse){
        console.log(serverResponse);
      });
  };

  RemoteDatastore.prototype.getAll = function(cb){
    return  $.get(this.serverUrl,function(serverResponse){
        if (cb) {
          console.log(serverResponse);
          cb(serverResponse);
        }
      });
  };

  RemoteDatastore.prototype.get = function(key,cb){
    return  $.get(this.serverUrl + '/' + key, function(serverResponse){
      if (cb) {
        console.log(serverResponse);
        cb(serverResponse);
      }
      });
  };

  RemoteDatastore.prototype.remove = function(key){
    return  $.ajax({
        type:"DELETE",
        url:this.serverUrl+'/'+key
      });
  };

  App.RemoteDatastore = RemoteDatastore;
  window.App = App;
})(window);
