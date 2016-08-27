/**
 * 
 */

function Ship(x, y, status) {
	this.x = x;
	this.y = y;
	this.status = status; //boolean
	
	this.object = new Grid(10, 10);
}

Ship.prototype.position = function() {
	
	var array = [];
	var counter = 0;
	
	if(this.status == false) {
		if (this.y + 2 <= this.object.rows) {
			for (var i = this.y; i <= this.y + 2; i++) {
				var id = 'coordinate' + this.x + i;
				/*if (document.getElementById(id).style.backgroundColor == "green") {
					throw new Error("Ships not correctly positioned!");
				} else {
					document.getElementById(id).style.backgroundColor = "green";
				}*/
				array[counter] = id;
				counter++;
			}
		} else {
			throw new Error ("Ships not correctly positioned!");
		}
	}
	else if (this.status == true) {
		if (this.x + 2 <= this.object.cols) {
			for (var j = this.x; j <= this.x + 2; j++) {
				var id = 'coordinate' + j + this.y;
				/*if (document.getElementById(id).style.backgroundColor == "green") {
					throw new Error("Ships not correctly positioned!");
				} else {
					document.getElementById(id).style.backgroundColor = "green";
				}*/
				array[counter] = id;
				counter++;
			}
		} else {
			throw new Error ("Ships not correctly positioned!");
		}
	}
	
	return array;
}