var numSquares = 6;
var rgbCode = document.getElementById('rgbCode');
var result = document.getElementById('result');
var resultEmoji = document.getElementById('resultEmoji');
var button = document.getElementById('restart');
var answered = false;

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
     return colors[random];
     console.log(random);
}
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll('.square');
var pickedColor = pickColor();
rgbCode.textContent = pickedColor;

function eventHandling() {
     for (let i = 0; i < numSquares; i++) {
          square[i].style.background = colors[i];
          square[i].addEventListener("click", function (){
               var clickedColor = this.style.background;
               if (clickedColor == pickedColor && !answered) {
                    result.textContent = "Good Job! That's right";
                    resultEmoji.textContent = "😱";
                    confetti();
                    answered = true;
               } else if (clickedColor != pickedColor && !answered){
                    result.textContent = "OOPS! You got it wrong!"
                    resultEmoji.textContent = "😩"
                    answered = true;
               }
          })
     }
}
eventHandling();

button.addEventListener("click", function(){
     window.location.reload();
})