"use strict";

(function(){
  angular
  .module("blitter",[
    "ui.router","bleets"])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("bleetindex", {
      url: "/bleets",
      templateUrl: "js/bleets/index.html",
      controller: "BleetIndexController",
      controllerAs: "BleetIndexVM"
    })
    .state("bleetshow", {
      url: "/bleets/:id",
      templateUrl: "js/bleets/show.html",
      controller: "BleetShowController",
      controllerAs: "BleetShowVM"
    })
  }
}());
