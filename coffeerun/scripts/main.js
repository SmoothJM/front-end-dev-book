(function (window){
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;
  var RemoteDatastore = App.RemoteDatastore;
  var remoteDS = new RemoteDatastore(SERVER_URL);
  // var myTruck = new Truck('ncc-1701', new DataStore());
  var myTruck = new Truck('ncc-1701', remoteDS);
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data){
    myTruck.createOne.call(myTruck,data);
    checkList.addRow.call(checkList,data);
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);
  // formHandler.addCheck(Validation.isCorrect);
  // console.log(formHandler);
})(window);
