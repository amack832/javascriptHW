// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = document.querySelector("tbody");


function makeTable () {
	tbody.innerHTML = "";
	for (var i = 0; i < tableData.length; i++) {
		var ufoData = tableData[i];
		var fields = Object.keys(ufoData);
		var row = tbody.insertRow(i);
		for (var j=0; j < fields.length; j++){
			var dataCell = row.insertCell(j);
			dataCell.innerHTML = ufoData[fields[j]];
		}
		
	}
}

makeTable();