// Code your solution in this file!
//return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers =  function myFunc(drivers) {
  return drivers.slice(0, 2)
}
//return a new array containing the last two drivers from the passed-in array
const returnLastTwoDrivers = function myFunc(drivers) {
  return drivers.slice(-2)
}

//selectingDrivers
const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

const createFareMultiplier = (fare) => {//‣should multiply..given value using..multiplier ‣returns a function
  return (n) => {
    return fare * n
  }
}
const fareDoubler = (fare) => { //double fare
  return fare * 2
}
const fareTripler = (fare) => { //triple fare
  return fare * 3
}
// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument ‣
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const fetchSpecifiedDrivers = (drivers, cb) => { return cb(drivers)}
