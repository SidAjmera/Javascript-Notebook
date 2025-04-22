var numSquares = 6;

function randomColor() {
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
     var arr = [];
     for (let i = 0; i < num; i++) {
          arr.push(randomColor());
        }
        return arr;
}

function pickColor() {
     var random = Math.floor(Math.random() * numSquares);
}
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll('.square');
for (let i = 0; i < numSquares; i++) {
     square[i].style.background = colors[i];
     console.log(colors[i]);
     console.log(square[i]);
}