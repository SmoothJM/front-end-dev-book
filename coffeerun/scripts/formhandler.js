(function (window){
  'use strict';
  var App = window.App || {};

  function FormHandler(selector){
    if(!selector){
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }

    // update strengthOutput when slider changes and add color
    var slider = document.getElementById("strengthLevel");
    var sliderOutput = document.getElementById("strengthOutput");
    var sliderLabel = document.getElementById('strengthLabel');
    slider.addEventListener("input", function() {
      sliderOutput.value = slider.value
      var intensity = slider.value;
      var intensityClass;
      if (intensity < 34) {
        intensityClass = "low";
      }
      else if (intensity < 68) {
        intensityClass = "medium";
      }
      else {
        intensityClass = "high";
      }
      sliderOutput.classList.remove('low', 'medium', 'high');
      sliderOutput.classList.add(intensityClass);
    });

  };
  FormHandler.prototype.addSubmitHandler = function(fn){
    console.log('I am addSubmitHandler');
    this.$formElement.on('submit',function(event){
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item){
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      // console.log((data['size'] === "godzilla") && (data['strengthLevel'] === "100"));
      if ((data['size'] === "godzilla") && (data['strength'] === "100")) {
        $('#myModal').modal();
      }
      console.log(data);
      fn(data)
      .then(function(){
        this.reset();
        this.elements[0].focus();
      }.bind(this));
    });
  };

  FormHandler.prototype.addInputHandler = function(fn){
    console.log('Setting input handler for form');
    this.$formElement.on('input','[id="emailInput"]',function(event){
      var emailAddress = event.target.value;
      // console.log(fn(emailAddress));
      var message = '';
      if (fn(emailAddress)) {
        event.target.setCustomValidity('');
      }else {
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };

  // FormHandler.prototype.addCheck = function(fn){
  //   // var s = document.getElementById('coffeeOrder').value;
  //   // var level = document.getElementById('strengthLevel').value;
  //   this.$formElement.on('input',function(event){
  //       var message = '';
  //       var s = event.target.form.coffee.value;
  //       var level = event.target.form.strength.value;
  //       if (!fn(s,level)) {
  //         event.target.setCustomValidity('');
  //       }else {
  //         message = 'too much';
  //         event.target.setCustomValidity(message);
  //       }
  //   });
  // };
  App.FormHandler = FormHandler;
  window.App = App;
  var $ = window.jQuery;
})(window);
