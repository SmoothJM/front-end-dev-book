(function (window){
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var TRUCK_NAME = 'ncc-1701';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;
  var RemoteDatastore = App.RemoteDatastore;
  var remoteDS = new RemoteDatastore(SERVER_URL);
  // var myTruck = new Truck(TRUCK_NAME, remoteDS);
  var myTruck = new Truck(TRUCK_NAME, new DataStore());
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);
  window.myTruck = myTruck;
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  formHandler.addSubmitHandler(function(data){
    return myTruck.createOne.call(myTruck,data)
      .then(function(){
        checkList.addRow.call(checkList,data);
      });
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);
  myTruck.printOrders(checkList.addRow.bind(checkList));
  // formHandler.addCheck(Validation.isCorrect);
})(window);
