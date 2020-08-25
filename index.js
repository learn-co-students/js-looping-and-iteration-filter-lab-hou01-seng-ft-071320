// Code your solution in this file
function findMatching(drivers,name){
    let result = drivers.filter(function(string){return string.toUpperCase() === name.toUpperCase();});
    return result;
}

function fuzzyMatch(drivers,string){
    let result = drivers.filter(
        function(name){
            return name.slice(0,string.length) === string;
            }
        );
    return result;
}

function matchName(drivers,string){
    let result = drivers.filter(function(obj){return obj['name'].toUpperCase() === string.toUpperCase();});
    return result;
}