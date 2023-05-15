



// Upon loading of the page, the green light and the images of winning Tom and Jerry are hidden. The red light is visible and is ready to be clicked upon. Tom and Jerry are positioned on the left side of the viewport.  This is the setup that occurs when the page loads as well as when the winning image is clicked.
function RedLight() {
    greenLight.style.display = "none";
    winningTom.style.display = "none";
    winningJerry.style.display = "none";
}

// Call the RedLight() function above on page load
window.addEventListener('load', RedLight);

var tom = document.getElementById('tom'); // variable created for Tom image
var jerry = document.getElementById('jerry'); //variable created for Jerry image
var winningTom = document.getElementById('winning-tom'); // variable created for the image of winning Tom
var winningJerry = document.getElementById('winning-jerry'); // variable created for the image of winning Jerry
var greenLight = document.getElementById('green-light'); // variable created for the image of the stoplight with the green light illuminated
var redLight = document.getElementById('red-light'); //variable created for the image of the stoplight with the red light illuminated


/*the function that starts the race.  Tom and Jerry begin at the very left side of the screen (0 px).  Create variables for position1 and position2 (Tom and Jerry) for the initial position of them.  Create variables for speed1 and speed2 for the speed of Tom and Jerry respectively.  The Math.random() function generates random speeds for the two of them (between 8 and 12).  Math.floor rounds down to the nearest integer.  These numbers are added to the position variables during each cycle of the loop.  This updates the "position" of Tom and Jerry as the race happens and moves them across the page.  When Tom and Jerry reach the right side of the page, a random winner is chosen by the Math.random() function. When they reach the right side of the page (window.innerWidth-px), the loop is exited and the race is stopped by the clearInterval() function. */
function race() {
    var position1 = 0;
    var position2 = 0;
    var speed1 = Math.floor(Math.random() * 5) + 8; //Tom and moving at random speeds between 8 and 12
    var speed2 = Math.floor(Math.random() * 5) + 8; // Jerry moving at random speeds between 8 and 12
    redLight.style.display = "none"; //image of red light disappears
    greenLight.style.display = "block"; //image of green light appears. This must be clicked in order for the race to start


    //updates the position of Tom and Jerry's left CSS position. The positions are updated each cycle of the loop and the speeds are random
    var raceInterval = setInterval(function() {
        position1 += speed1;
        position2 += speed2;


        //the updated positions are set using the style.left property, the continuous updating makes the images move horizontally across the screen
        tom.style.left = position1 + 'px';
        jerry.style.left = position2 + 'px';

        //based on Tom and Jerry's position, the race is terminated.  Measurement is the inner width of the window minus approximate size (px) of the image
        if (position1 >= window.innerWidth - 500 && position2 >= window.innerWidth - 375) {
            clearInterval(raceInterval); //when the images reach these positions, the race is terminated

            /*variable created to determine the random winner of the race.  It uses the Math.random() function to generate a random integer between 1 and 2. Math.floor() rounds the number down to the nearest integer. Multiplying the result of Math.random gives a number between 1 and 2 and then adding one gives a number between 1 and 3.  The entire expression gives the number- either 1 or 2 and assigns it to the variable "randomWinner"*/
            var randomWinner = Math.floor(Math.random() * 2) + 1;


            // if the winning number is 1, Tom is the winner and his image is displayed. If the number is a 2, Jerry is the winner and his image is displayed
            if (randomWinner == 1) {
                winningTom.style.display = "block";
            } else {
                winningJerry.style.display = "block";
            }

            winningTom.addEventListener('click', reset); // calls the reset function when clicked
            winningJerry.addEventListener('click', reset); // calls the reset function when clicked on
        }
    }, 50);// race function is called every 50 milliseconds
}

redLight.addEventListener('click', race); // Call the race() function when the red light is clicked on
winningTom.addEventListener('click', reset); // calls the reset function when clicked on
winningJerry.addEventListener('click', reset); // calls the reset function when clicked on


//resets Tom and Jerry to the far left and these variables are accessible to both the race() and reset() functions
var position1 = 0;
var position2 = 0;


function reset() {
    position1 = 0; //resets Tom's position
    position2 = 0;  //resets Jerry's position

    tom.style.left = "0px"; //sets Tom's left CSS property to 0px
    jerry.style.left = "0px"; //sets Jerry's left CSS property to 0px

    winningTom.style.display = "none"; //hides the winning image of Tom
    winningJerry.style.display = "none"; //hides the winning image of Jerry
    greenLight.style.display = "none"; //hides the stoplight with green light
    redLight.style.display = "block";  //displays the stopliight with red light
}

// upon clicking, resets Tom and Jerry to their original starting points
winningTom.addEventListener('click', reset);
winningJerry.addEventListener('click', reset);
