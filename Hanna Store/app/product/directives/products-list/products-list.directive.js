(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ProductsList Object/function
     */
    function ProductsList () {

        /***************** PRIVATE *******************/

   
        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'EA',
            scope: {
                onSelected:'&',
                products:'=',
                keyForSearch:'='
            },
            templateUrl: 'product/directives/products-list/products-list.directive.html',
            controller:ProductsListController,
            controllerAs:'vm',
            bindToController:true
        };

        return directive;

    }


    function ProductsListController($state , $stateParams) {
        var vm = this;


        function _onClick(item) {
        if(item !== undefined){
         if(vm.onSelected()){ 
             vm.onSelected()(item);
            }
          }
        }

        vm.params = $stateParams;
        vm.onClick = _onClick;
    }

    /* ANGULAR */
    angular
        .module('product')
        .directive('productsList', ProductsList );

})();
