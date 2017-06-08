// Create a function that creates car objects which have a make, model year, and color.
//
function carObjects(newMake, newYear, newColor,) {

  return {
    make: newMake,
    year: newYear,
    color: newColor,
    getInfo: function() {
    return this.make + " from" + this.year + " that is " + this.color
    }
  }
}
// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.
//
// Challenges:
//
// Write a function that creates an object that represents a car with the following properties:
// model year
// make
// color
// Add a function to the object that is being returned that contatenates the make, year and color.

let car1 = carObjects("Honda", "1999", "Blue")

// The car can accelerate, brake, and tell you its speed.
//
// Challenges:
//
// Add a speed variable to the closure of the car object. Add the following functions to the object:
// getSpeed: returns current speed
// accelerate: increases the speed by 10mph (but does not return anything)
// brake: decreases the speed by 7mph (but does not return anything)
