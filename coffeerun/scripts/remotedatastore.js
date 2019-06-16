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
    $.post(this.serverUrl, val, function(serverResponse){
      console.log(serverResponse);
    });
  };

  RemoteDatastore.prototype.getAll = function(cb){
    $.get(this.serverUrl,function(serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDatastore.prototype.get = function(key,cb){
    $.get(this.serverUrl + '/' + key, function(serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDatastore.prototype.remove = function(key){
    $.ajax({
      type:"DELETE",
      url:this.serverUrl+'/'+key
    });
  };

  App.RemoteDatastore = RemoteDatastore;
  window.App = App;
})(window);
