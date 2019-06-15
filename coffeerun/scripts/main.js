(function (window){
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  var myTruck = new Truck('ncc-1701', new DataStore());
  formHandler.addSubmitHandler(myTruck.createOne.bind(myTruck));
  console.log(formHandler);
  window.myTruck = myTruck;
})(window);
