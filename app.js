'used strict';

// event.preventDefault();
var allOrders = [];

//constructor function
function Order(products, quantity, firstName, lastName, address) {
  this.products = products;
  this.quantity = quantity;
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  allOrders.push(this);
}

//
function handleEvent(event) {
  event.preventDefault();
  var dropDownMenu = document.getElementById('dropDownMenu');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var quantity = document.getElementById('quantity');
  var address = document.getElementById('address');
  var productName = document.getElementById('products');
  new Order(quantity, firstName, lastName, address, products);
  pushOrder();
}
  // var theForm = document.createElement('li');

//form
function handleForm(event) {
    // event.preventDefault();
  console.log(event);
  var dropDownMenu = event.target.form.elements.dropDownMenu.value;
  var quantity = parseInt(event.target.form.elements.quantityInput.value);
  var firstName = event.target.form.elements.firstNameInput.value;
  var lastName = event.target.form.elements.lastNameInput.value;
  var address = event.target.form.elements.addressInput.value;

  if(!dropDownMenu || !quantity || !firstName || !lastName || !address) {
    return null;
  }//a bang statement to prevent allowance of empty field submits from adding a new store feature
  event.target.form.elements.dropDownMenu.value = null;//making values to clear the input after another button is pressed
  event.target.form.elements.quantityInput.value = null;
  event.target.form.elements.firstNameInput.value = null;
  event.target.form.elements.lastNameInput.value = null;
  event.target.form.elements.addressInput.value = null;
}

  //allOrders.push(dropDownMenu, quantity, firstName, lastName, address);
function pushOrder(){
  localStorage.clear();
  var allOrdersJSON = JSON.stringify(allOrders);
  localStorage.allOrders = allOrdersJSON;
}

  // orderFormData.addEventListener('submit', handleForm);
  // var newestOrder = handleForm(event);
  // if (!newestOrder) {
  //   alert ('All store information fields must have input!');
  // } else {
  //   orderFormData.render();
  // }

// }
function pullOrder() {
  var retrieveOrderData = localStorage.allOrders;
  var parseOrderData = JSON.parse(retrieveOrderData);
  for (var i = 0; i < parseOrderData.length; i++) {
    allOrders[i] = parseOrderData[i];
  }
}

// var buttonForPlaceOrder = document.getElementById('placeOrder');
// buttonForPlaceOrder.addEventListener('click', handleEvent);

theForm.addEventListener('submit', convertForm);

if (localStorage) {
  pullOrder;
}
// please verify this file //
// Hello, Everyone
//
// [8:11]
// I tried calling each of you, via slack:
//
// [8:12]
// The branch is created; but I do not believe my line of code went in.
//
// [8:12]
// Bruce, please verify 63
//
// [8:13]
// I do not believe I was working 81
//
// [8:13]
// however, that looks like what I typed.
//
// [8:13]
// Thank you

// theForm.addEventListener('place-order', handleForm);
// var newestStore = handleForm(event);
// if (!newestStore) {
// console.log('All fields required!');
// } else { //do we even need an else??
//   localStorage.orderFormData = JSON.stringify(allOrders);
// }
// }
// theForm.addEventListener('submit', );
// function handleForm(event) {
//   if () {
//     localStorage.orderFormData = JSON.stringify(allOrders);
//   } else {
//     alert ''
//   }
// }
