"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  $.get('/fortune', (res) => {
    $('#fortune-text').html(res);
    });
  };

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get('/weather.json', formData, (res) => {
      $('#weather-info').html(res.forecast) });
      };

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formData = {
      'melon': $('#melon-type-field').val(),
      'qty': $('#qty-field').val()
    }
  
    $.post('/order-melons.json', formData, (res) => {
      $('#order-status').html(`${ res.code }, ${ res.msg }`);
     });
   
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);

// @app.route('/order-melons.json', methods=['POST'])
// def order_melons():
//     """Order melons and return a dictionary of result-code and result-msg."""

//     melon = request.form.get('melon_type')
//     qty = int(request.form.get('qty'))

//     if qty > 10:
//         result_code = 'ERROR'
//         result_text = "You can't buy more than 10 melons"
//     elif qty > 0:
//         result_code = 'OK'
//         result_text = "You have bought {} {} melons".format(qty, melon)
//     else:
//         result_code = 'ERROR'
//         result_text = "You want to buy fewer than 1 melons? Huh?"

//     return jsonify({'code': result_code, 'msg': result_text})

