(function (window){
  'use strict';
  var App = window.App || {};

  var Validation = {
    isCompanyEmail: function(email){
      return /.+@bignerdranch\.com$/.test(email);
    }
  };
  // var Validation = {
  //   isCorrect: function(s,level){
  //     return s === 'decaf' && level > 30;
  //   }
  // };

  App.Validation = Validation;
  window.App = App;
})(window);
