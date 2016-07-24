(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ProductContainer Object/function
     */
    function ProductContainer () {

        /***************** PRIVATE *******************/



        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'EA',
            scope: {

            },
            controller:ProductContainerController,
            controllerAs:'vm',
            bindToController:true,
            templateUrl: 'product/directives/product-container/product-container.directive.html'
        };

        return directive;

    }


    function ProductContainerController($log , $state) {
        
        var vm = this;


        function setKey(_key) {
            $log.debug(_key);
            $state.go('shell.products.sub' , {key:_key});
        }


        vm.setKey = setKey;
        vm.products = [{key:9 ,  name:"Bike" , price:"1100"+"$"}  , {key:0 , name:"Nike" , price:"700"+"$"} , {key:1 , name:"Diadora" , price:"300"+"$"}];
        vm.subProducts = [{parent:0 , name:"n1" },{parent:0 , name:"n2" } , {parent:1 , name:"d1" },{parent:1 , name:"d2" }];

    }

    /* ANGULAR */
    angular
        .module('product')
        .directive('productContainer', ProductContainer );

})();
