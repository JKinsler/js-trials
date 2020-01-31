"use strict";


// 1. isHometown
function isHometown(town) {
  //Given a `town`, return `True` if `town` is 'San Francisco//
  if (town === 'San Francisco'){
    console.log(true);
    }
  else {
    console.log(false);
  }
}

// Define your function here


// 2. getFullName
function get_full_name(first_name, last_name) {
  // full name of a person

  console.log(first_name + " " +last_name);
  }


// Define your function here


// 3. calculateTotal

// Define your function here

function calculate_total(base_price, state, tax=0.5){
  //Return the total price of an item, figuring in state taxes and fees.//

  let subtotal = base_price * (1 + tax);

  let fee = 0;

  if (state === 'CA'){
    fee = 0.03 * subtotal;
  }
  else if (state === 'PA'){
    fee = 2;
  }
  else if (state === 'MA'){
    if (base_price <= 100){
      fee = 1;
      }
    else {
      fee = 3;
      } 
  }

  console.log(subtotal + fee);
}