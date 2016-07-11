(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ProductService Object/function
     */
    function ProductService (codeGenerator , localDataService ,  $log) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            initialized:false,
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

           localDataService.save(newProduct._id , newProduct);
        }

        function _removeProduct(_product) {
             _product['is_removed'] = true;
             localDataService.save(_product._id , _product);
        }


       function _loadAllProducts() {
         _model.initialized = false;
         _model.products = localDataService.getDocumentsByType("product");
         _model.initialized = true;
       }

        /****************** PUBLIC *******************/
        var service = {
            model:_model,
            addProduct:_addProduct,
            loadAllProducts:_loadAllProducts,
            removeProduct:_removeProduct
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('product')
        .factory('productService', ProductService );

})();
