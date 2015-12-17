//Configuration
var SERVER = "https://rd-flp2.qliktech.com/";
var XRFKEY = rand(16);


// Event handling
var tabs = document.querySelector('md-tabs');
var pages = document.querySelector('core-pages');

tabs.addEventListener('core-select', function() {
  pages.selected = tabs.selected;
});


//Supporting functions
function rand(length, current) {
  current = current ? current : '';
  return length ? rand(--length, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + current) : current;
}

//Angular code

//Services
var service = angular.module("qrsService", ['ngResource', 'ngMaterial']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey');
});;

service.config(["$httpProvider", function($httpProvider) {
  $httpProvider.defaults.headers.common = {
    'x-qlik-xrfkey': XRFKEY
  };
}]);
