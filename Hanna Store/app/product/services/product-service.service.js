(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ProductService Object/function
     */
    function ProductService (codeGenerator , $log) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            products:[]
        };

        function _addProduct(_name , _price) {
            var newProduct = {
                _id:codeGenerator.generate(),
                type:'product',
                name:_name, 
                price:_price
            };

           _model.products.push(newProduct);
        }

        function _removeProduct(_product) {
             _product['is_removed'] = true;
        }

        /****************** PUBLIC *******************/
        var service = {
            model:_model,
            addProduct:_addProduct,
            removeProduct:_removeProduct
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('product')
        .factory('productService', ProductService );

})();
