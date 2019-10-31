"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune',(res)=>{
      console.log(res);
      $('#fortune-text').html(res);
    });
  }

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData,(res)=>{
      alert(`Forecast: ${res.forecast}`);

    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    console.log('fhfjjfd');
    let url = "/order-melons.json";
    let formData={"quantity": $("#qty-field").val(), "type": $("#melon-type-field").val()};
    $.post(url, formData,(res)=>{
        $('#order-status').html(`Status code: ${res.code}, Messege: ${res.msg}`);
    });
}


$("#order-form").on('submit', orderMelons);


