/**
 * 
 */

function Grid(rows, cols) {
	this.rows = rows;
	this.cols = cols;
	var squareSize = 50;
	
	this.getSquareSize = function() {
		return squareSize;
	}
}

Grid.prototype.init = function() {
	for (var i = 0; i < this.rows; i++) {
		for (var j = 0; j < this.cols; j++) {
			var el = document.createElement("div");
			
			el.id = 'coordinate' + j + i;
			
			el.style.position = "absolute";
			
			el.style.top = i * this.getSquareSize() + 'px';
			el.style.left = j * this.getSquareSize() + 'px';
			
			el.style.width = this.getSquareSize() + "px";
			el.style.height = this.getSquareSize() + "px";
			
			el.style.backgroundColor = "aqua";
			
			document.getElementById("gameboard").appendChild(el);
		}
	}
}