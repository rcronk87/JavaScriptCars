// The car can accelerate, brake, and tell you its speed.
//
// Challenges:
//
// Add a speed variable to the closure of the car object. Add the following functions to the object:
// getSpeed: returns current speed
// accelerate: increases the speed by 10mph (but does not return anything)
// brake: decreases the speed by 7mph (but does not return anything)


function carSpeed() {
  let getSpeed = 55
    return {
      getValue: function() {return getSpeed;},
      accelerate: function() {getSpeed+=10},
      brake: function() {getSpeed -= 7}

    }
}

var currentSpeed = carSpeed()
