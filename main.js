var myApp = angular.module('myApp', []);

myApp.factory('Data',function(){
  return {message : "returning from service"}
})


myApp.filter('reverse',function (Data1){
  return function(text){
    return text.split("").reverse().join("")+Data1.message;
  }
})

myApp.factory('Data1',function(){
  return {message : "returning from second service"}
})


function FirstCtrl($scope,Data){
  $scope.data = Data;
  
  $scope.display = function(){
    return "returning from display method";
  }
}



function SecondCtrl($scope,Data1){
 $scope.data = Data1;
 
 $scope.reverseMessage =function(message){
return message.split("").reverse().join("") +" REVERSED";


 }
}
