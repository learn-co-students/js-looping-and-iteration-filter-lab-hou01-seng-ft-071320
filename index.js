// Code your solution in this file
function findMatching(drivers, name){
    let selectedDrivers = [];
    selectedDrivers = drivers.filter(function(driver){ return name.toUpperCase() === driver.toUpperCase(); });
    return selectedDrivers;
}

function fuzzyMatch(drivers, string){
    let selectedDrivers = [];
    selectedDrivers = drivers.filter(function(driver){ return string === driver.slice(0,2); });
    return selectedDrivers;
}

function matchName(drivers, string){
    let selectedDrivers = [];
    selectedDrivers = drivers.filter(function(driver){ return string === driver.name; });
    return selectedDrivers;
}