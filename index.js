// Code your solution here
function findMatching(driverNames, targetDriver) {
    return driverNames.filter(name => name.toLowerCase() === targetDriver.toLowerCase())
}

function fuzzyMatch(driverNames, targetBeginning) {
    return driverNames.filter(name => compareNameBeginnings(name, targetBeginning))

}

function matchName(driverNamesObj, targetDriver) {
    return driverNamesObj.filter(driver => driver.name.toLowerCase() === targetDriver.toLowerCase())
}

//helper function: return true if the beginnings of two string match
function compareNameBeginnings(name, targetBeginning) {
    let indexEnd = targetBeginning.length;
    return name.slice(0, indexEnd).toLowerCase() === targetBeginning.toLowerCase(); 
}
