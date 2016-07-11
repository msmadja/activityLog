(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ProductManager Object/function
     */
    function ProductManager () {


        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            scope: {},
            controller:ProductManagerController,
            controllerAs:'vm',
            bindToController:true,
            templateUrl: 'product/directives/product-manager/product-manager.directive.html'
        };

        return directive;

    }

     function ProductManagerController(productService , $log) {
            


            var vm = this;


            function _addProduct(name , price) {
                productService.addProduct(name , price);
                vm.productName = '';
                vm.productPrice = '';
            }

            function _removeProduct(product) {
                productService.removeProduct(product);
            }


            function _init() {
                productService.loadAllProducts();
            }

            function _onSelected(item) {
                $log.info("My item is: "+item);
            }


            _init();

            vm.model = productService.model;
            vm.addProduct = _addProduct;
            vm.removeProduct = _removeProduct;
            vm.onSelected = _onSelected;
            vm.productName = '';
            vm.productPrice = '';

      }

    /* ANGULAR */
    angular
        .module('product')
        .directive('productManager', ProductManager );

})();
