var exec = require('cordova/exec');

function QGraph() { 
    console.log("QGraph.js: is created");
}

QGraph.prototype.initializeSdk = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "initializeSdk", [aString]);
}

QGraph.prototype.getInstance = function(){
    exec(function(result){}, function(result){}, "QGraph", "getInstance", []);
}

QGraph.prototype.onStart = function(){
    exec(function(result){}, function(result){}, "QGraph", "onStart", []);
}

QGraph.prototype.logEvent = function(aString, aJSONObjectOrDouble, aDouble){
    if (aString != null && aJSONObjectOrDouble != null && aDouble != null) {
        exec(function(result){}, function(result){}, "QGraph", "logEvent", [aString, aJSONObjectOrDouble, aDouble]);
    } else if (aString != null && aJSONObjectOrDouble != null) {
        exec(function(result){}, function(result){}, "QGraph", "logEvent", [aString, aJSONObjectOrDouble]);
    } else if (aString != null) {
        exec(function(result){}, function(result){}, "QGraph", "logEvent", [aString]);
    } 
}

QGraph.prototype.logEvents = function(aJSONArray){
    exec(function(result){}, function(result){}, "QGraph", "logEvents", [aJSONArray]);
}

QGraph.prototype.setCustomUserParameter = function(aString, aObject){
    exec(function(result){}, function(result){}, "QGraph", "setCustomUserParameter", [aString, aObject]);
}

QGraph.prototype.setCustomUserParameters = function(aJSONObject){
    exec(function(result){}, function(result){}, "QGraph", "setCustomUserParameters", [aJSONObject]);
}

QGraph.prototype.setUserId = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setUserId", [aString]);
}

QGraph.prototype.setName = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setName", [aString]);
}

QGraph.prototype.setFirstName = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setFirstName", [aString]);
}

QGraph.prototype.setLastName = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setLastName", [aString]);
}

QGraph.prototype.setCity = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setCity", [aString]);
}

QGraph.prototype.setEmail = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setEmail", [aString]);
}

QGraph.prototype.setDayOfBirth = function(aInt){
    exec(function(result){}, function(result){}, "QGraph", "setDayOfBirth", [aInt]);
}

QGraph.prototype.setYearOfBirth = function(aInt){
    exec(function(result){}, function(result){}, "QGraph", "setYearOfBirth", [aInt]);
}

QGraph.prototype.onStop = function(){
    exec(function(result){}, function(result){}, "QGraph", "onStop", []);
}

QGraph.prototype.deleteStoredNotifications = function(){
    exec(function(result){}, function(result){}, "QGraph", "deleteStoredNotifications", []);
}

var returnedResult;

function sucessCallback(result) {
    returnedResult = result;
}

QGraph.prototype.getStoredNotifications = function(){
    exec(sucessCallback, function(result){}, "QGraph", "getStoredNotifications", []);
    return returnedResult;
}

QGraph.prototype.createEvent = function(aString, aJSONObjectOrDouble, aDouble){
    if (aString != null && aJSONObjectOrDouble != null && aDouble != null) {
        exec(sucessCallback, function(result){}, "QGraph", "createEvent", [aString, aJSONObjectOrDouble, aDouble]);
    } else if (aString != null && aJSONObjectOrDouble != null) {
        exec(sucessCallback, function(result){}, "QGraph", "createEvent", [aString, aJSONObjectOrDouble]);
    } else if (aString != null) {
        exec(sucessCallback, function(result){}, "QGraph", "createEvent", [aString]);
    }
    return returnedResult;
}

QGraph.prototype.isQGMessage = function(aString) {
    exec(sucessCallback, function(result){}, "QGraph", "isQGMessage", [aString]);
    return returnedResult;
}

QGraph.prototype.setMaxNumStoredNotifications = function(aLong){
    exec(function(result){}, function(result){}, "QGraph", "setMaxNumStoredNotifications", [aLong]);
}

QGraph.prototype.setPhoneNumber = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setPhoneNumber", [aString]);
}

QGraph.prototype.setUtmSource = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setUtmSource", [aString]);
}

QGraph.prototype.setUtmMedium = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setUtmMedium", [aString]);
}

QGraph.prototype.setUtmTerm = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setUtmTerm", [aString]);
}

QGraph.prototype.setUtmContent = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setUtmContent", [aString]);
}

QGraph.prototype.setUtmCampaign = function(aString){
    exec(function(result){}, function(result){}, "QGraph", "setUtmCampaign", [aString]);
}

QGraph.prototype.setAttributeWindow = function(aLong){
    exec(function(result){}, function(result){}, "QGraph", "setAttributeWindow", [aLong]);
}

QGraph.prototype.setClickAttributionWindow = function(aLong){
    exec(function(result){}, function(result){}, "QGraph", "setClickAttributionWindow", [aLong]);
}

QGraph.prototype.setNotificationAndTime = function(aString, aLong){
    exec(function(result){}, function(result){}, "QGraph", "setNotificationAndTime", [aString, aLong]);
}

/*QGraph.prototype.hideInApp = function(){
    exec(function(result){}, function(result){}, "QGraph", "hideInApp", []);
}*/

QGraph.prototype.setTracking = function(aBoolean, aBoolean, aBoolean){
    exec(function(result){}, function(result){}, "QGraph", "setTracking", [aBoolean, aBoolean, aBoolean]);
}


var qGraph = new QGraph();
module.exports = qGraph;