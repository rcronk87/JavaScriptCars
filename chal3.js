// Create a car object and use a while loop to take its speed up to 50mph.
// Then use a while loop to brake down to 0mph.
// Surprise: it doesnt stop at 0mph, fix that.
//
// Challenges:
//
// Create a loop that accelerates the car up to 70mph.
// Create a loop that decelerates the car to 0pmh.
// Call break after the car is at 0mph.
// Fix the issue.
// Hint: The loops use a car object, but is not part of the car object
function carSpeed() {
  let getSpeed = 25
    return {
      getValue: function() {return getSpeed;},
      accelerate: function() {getSpeed++},
      brake: function() {getSpeed--}

    }
}
//create obj list

 function speedUp() {
  let getSpeed = 25
    do {

      obj.accelerate();
    }
    while (getSpeed<=50)
      return getSpeed;

  }

function speedDown(){
  let getSpeed = 25
  do {
     obj.brake();
  }
  while (getSpeed=50) {
    return getSpeed;
  }
    //   return carSpeed();

}

var currentSpeed = carSpeed()
