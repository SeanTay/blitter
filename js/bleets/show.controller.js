"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetShowController", ["BleetFactory","$stateParams", "$state", BleetShowControllerFunction]);

  function BleetShowControllerFunction(BleetFactory, $stateParams, $state){
    this.bleet = BleetFactory.get({id: $stateParams.id});
    this.update = function(){
      this.bleet.$update({id: $stateParams.id}).then(function(){
        $state.go("bleetshow",{},{reload:true})
      })
    }
    this.destroy = function(){
      this.bleet.$delete({id: $stateParams.id}).then(function(){
        $state.go("bleetindex",{},{reload:true})
      })
    }
  }
}())
