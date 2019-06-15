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
    console.log('Setting submit handler for form');
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
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };
  App.FormHandler = FormHandler;
  window.App = App;
  var $ = window.jQuery;
})(window);
