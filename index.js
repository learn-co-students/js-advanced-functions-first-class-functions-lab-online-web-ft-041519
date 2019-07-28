// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const arr = [drivers[0], drivers[1]]
    return arr
}

const returnLastTwoDrivers = function(drivers) {
    const arr = [drivers[drivers.length - 2], drivers[drivers.length - 1]]
    return arr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function fareMultipler(value){
        return multiplier * value
    }
}

function fareDoubler(fare) {
    const func = createFareMultiplier(2)
    return func(fare)
}

function fareTripler(fare) {
    const func = createFareMultiplier(3)
    return func(fare)
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}