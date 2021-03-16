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
  var bydate = d3.select("#date");
  var bycity = d3.select("#city");
  var bystate = d3.select("#state");
  var bycountry = d3.select("#country");
  var byshape = d3.select("#shape");

  

  // Get the value property of the input element
  var filterdate = bydate.property("value");
  var filtercity = bycity.property("value");
  var filterstate = bystate.property("value");
  var filtercountry = bycountry.property("value");
  var filtershape = byshape.property("value");

  if(filterdate){
		// 2. Filter the data
		var filteredData = tableData.filter(list => list.datetime === filterdate);
	
		// 3. Load the new data
		if(filteredData.length !== 0) {
      tbody.html("");
      filteredData.forEach(filteredUFOSighting => {
        var row = tbody.append("tr");
        Object.entries(filteredUFOSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      }
    else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No UFO sightings found on this date");
		}
	  }
	  else if(filtercity) {
      // 2. Filter the data
      var filteredData = tableData.filter(list => list.city === filtercity);
      
      // 3. Load the new data
      if(filteredData.length !== 0) {
        tbody.html("");
        filteredData.forEach(filteredUFOSighting => {
          var row = tbody.append("tr");
          Object.entries(filteredUFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
        }
      else {
        
        // Clear out the previously loaded HTML:
        tbody.html("");
        
        // Tell them "No rows match"
        tbody.append("tr").append("td").text("No UFO sightings found for this city");
      }
      }
	  else if(filterstate) {
      // 2. Filter the data
      var filteredData = tableData.filter(list => list.state === filterstate);
    
      // 3. Load the new data
      if(filteredData.length !== 0) {
        tbody.html("");
        filteredData.forEach(filteredUFOSighting => {
          var row = tbody.append("tr");
          Object.entries(filteredUFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
        }
      else {
        // Clear out the previously loaded HTML:
        tbody.html("");
        
        // Tell them "No rows match"
        tbody.append("tr").append("td").text("No UFO sightings found for this state");
      }
      }
	else if(filtercountry) {
		// 2. Filter the data
		var filteredData = tableData.filter(list => list.country === filtercountry);
	
		// 3. Load the new data
		if(filteredData.length !== 0) {
      tbody.html("");
      filteredData.forEach(filteredUFOSighting => {
        var row = tbody.append("tr");
        Object.entries(filteredUFOSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      }
    else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No UFO sightings found for this country");
		}
	  }
	else { // Shape
		// 2. Filter the data
		var filteredData = tableData.filter(list => list.shape === filtershape);
	
		// 3. Load the new data
		if(filteredData.length !== 0) {
      tbody.html("");
			filteredData.forEach(filteredUFOSighting => {
        
        var row = tbody.append("tr");
        Object.entries(filteredUFOSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings found for this shape");
    }
  }
}  

