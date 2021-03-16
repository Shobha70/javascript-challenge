// from data.js
var tableData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");

tbody.html("");

data.forEach(UFOSighting => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Assign the data from `data.js` to a descriptive variable
var UFOList = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  
  var filteredData = UFOList.filter(list => list.datetime === inputValue);

  tbody.html("");

  filteredData.forEach(filteredUFOSighting => {
    var row = tbody.append("tr");
    Object.entries(filteredUFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
};
