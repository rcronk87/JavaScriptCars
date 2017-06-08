function carObjects(newMake, newYear, newColor,) {
let carSpeed = 25
  return {

    make: newMake,
    year: newYear,
    color: newColor,
    // return this.make + " from " + this.year + " that is " + this.color
    getValue: function() {return carSpeed},
    accelerate: function() {carSpeed+=10},
    brake: function() {carSpeed-=7},
    stop: function() {carSpeed--}
  }
}

function speedUp(car) {

    do {
         car.accelerate();
      }
      while (car.getValue()<50);
    }

    function slowDown(car) {
      while (car.getValue()>=7){
          car.brake();

          }
      while (car.getValue()<7 && car.getValue()>0) {
        car.stop()
      }
      }

// function slowDown(car) {
//
//         do {
//              car.brake();
//
//           }
//
//           while (car.getValue()>=1);
//             // if (car.getValue() ===0) {
//             // car.stop()
//
//           while (car.getValue()<=0)
//           car.getValue() === 0
//   }
var car1 = carObjects("Honda", "1999", "Blue")
// var currentSpeed = carSpeed()
