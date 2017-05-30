// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])
.factory("features", function($firebaseArray) {
var Ref = new Firebase("https://parkonme-6ca97.firebaseio.com/features");
return $firebaseArray(Ref);
})
.run(function($ionicPlatform) {
$ionicPlatform.ready(function() {

if(window.cordova && window.cordova.plugins.Keyboard) {
// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
// for form inputs)
cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
// Don't remove this line unless you know what you are doing. It stops the viewport
// from snapping when text inputs are focused. Ionic handles this internally for
// a much nicer keyboard experience.
cordova.plugins.Keyboard.disableScroll(true);
}
if(window.StatusBar) {
StatusBar.styleDefault();
}
});
})
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
.state('map', {
url: '/',
templateUrl: 'templates/map.html',
controller: 'MapCtrl'
});
$urlRouterProvider.otherwise("/");
})
.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, features) {
var options = {timeout: 10000, enableHighAccuracy: true};
$cordovaGeolocation.getCurrentPosition(options).then(function(position){
var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
var mapOptions = {
center: latLng,
zoom: 17,
mapTypeId: google.maps.MapTypeId.ROADMAP,
mapTypeControl: true,
rotateControl: false,
};
$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
google.maps.event.addListenerOnce($scope.map, 'idle', function(){
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
var first = getUrlVars()["id"];

var iconBase = 'img/';
var icons = {
library: {
icon: iconBase + 'mwvanebrat.png'
},
info: {
icon: iconBase + 'witelibrat.png'
}
};
function addMarker(feature) {


}
var Ref = new Firebase("https://parkonme-6ca97.firebaseio.com/features");
$scope.features = features;
Ref.on("value", function(features) {
while(Object in $scope.features){
console.log(feature.lat);
}
}, function (errorObject) {
console.log("The read failed: " + errorObject.code);
});
console.log($scope.features);

angular.forEach($scope.features, function(feature) {
console.log(feature);
var marker = new google.maps.Marker({
map: $scope.map,
position: new google.maps.LatLng(feature.lat, feature.ling),
animation: google.maps.Animation.DROP,
icon: icons[feature.type].icon
});

google.maps.event.addListener(marker, 'click', function () { 
window.location.href = "templates/reregister.html?"+feature.$id+"&"+feature.tel+"&"+feature.mis;
}


var marker1 = new google.maps.Marker({
map: $scope.map,
animation: google.maps.Animation.DROP,
position: new google.maps.LatLng(41.713022, 44.747391),
label: " ",
icon: iconBase + 'mwvanebrat.png'
}); 
if(first){
marker1.setIcon('img/yvitelibrat.png');
}
google.maps.event.addListener(marker1, 'click', function () { 
if(first){
window.location.href = "templates/reregister.html"
}
else{ 
window.location.href = "templates/register.html";}
});
});
}, function(error){
console.log("Could not get location");
});
});