function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(f) {
      this._fahrenheit = f;
    }

    get temperature() {
      // assignment
      let c = 5/9 * (this._fahrenheit - 32)
      return c;
    }

    set temperature(c){
      let f = c * 9.0 / 5 + 32
      this._fahrenheit = f;
    }
  }


  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C

console.log('first time, thermos.temperature is ' + temp );
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

console.log('second time, thermos.temperature is ' + temp);
