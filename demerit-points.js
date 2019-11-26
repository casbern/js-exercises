//========== Demerit Points ===========

function checkSpeed(speed) {
const speedLimit = 70; 
const kmPerPoint = 5;

const points = Math.floor((speed - speedLimit) / kmPerPoint);

if (speed < speedLimit + kmPerPoint) {
return `ok`;
}
else if (points >= 12) {
return `License suspended`;
} 
else {
return `Points: ${points}`;
}
}

let result = checkSpeed(75);
console.log(result);