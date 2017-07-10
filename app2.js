'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var totalDailySales = [];
var theTable = document.getElementById('table');

function Store(name, minCustomers, maxCustomers, avgCookiesPerSale, totalDailySales) {
  this.store = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;

  this.avgCustomersPerHour = [];
  this.avgCookiesSoldPerHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
};

Store.prototype.render = function() {
  this.numbeOfCookiesPerCustomer();
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');
  thEl.textContent = this.store;
  trEl.appendChild(thEl);

  for(var i = 0; i < this.avgCookiesSoldPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookiesSoldPerHour[i];
    trEl.appendChild(tdEl);
  };

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
};

// Need to determine minimum customer per hour: use prototype. //
Store.prototype.numberOfCustomerPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.avgCustomersPerHour.push(customersPerHour);
  }
};

  // Number of cookies per customer. //
Store.prototype.numbeOfCookiesPerCustomer = function() {
  this.numberOfCustomerPerHour();
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookiesPerCustomer = Math.ceil(this.avgCustomersPerHour[i] * this.avgCookiesPerSale);
    this.avgCookiesSoldPerHour.push(cookiesPerCustomer);
    this.totalDailySales += cookiesPerCustomer;
  }
};

function createTableHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');

  tdEl.textContent = null;
  theTable.appendChild(trEl);
  trEl.appendChild(tdEl);

  for(var i = 0; i < hoursOfOperation.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOfOperation[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total Cookies Per Store';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

function renderallStores() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
};

function createTableFooterRow() {
  var trEl = document.createElement('tr');
  trEl.textContent = 'Total Cookies Per Hour';

  var totalCookiesSoldByHourPerLocation = 0;
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var totalCookiesSoldByHour = 0;

    for(var j = 0; j < allStores.length; j++) {
      totalCookiesSoldByHour += allStores[j].avgCookiesSoldPerHour[i];
    }
    totalCookiesSoldByHourPerLocation += totalCookiesSoldByHour;

    var tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesSoldByHour;
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = totalCookiesSoldByHourPerLocation;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
}

new Store('1st & Pike', 23, 65, 6);
new Store('SeaTac Airport', 3, 24, 1);
new Store('Seattle Center', 11, 38, 4);
new Store('Capitol Hill', 20, 38, 2);
new Store('Alki', 2, 16, 5);

createTableHeaderRow();
renderallStores();
createTableFooterRow();
