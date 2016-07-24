(function () {
    'use strict';

    angular
        .module('product', ['common']);

    angular
        .module('product')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.products', {
                url: '/products',
                views: {
                    'shellContentView@shell': {
                        template:'<product-container></product-container>'
                     }
                }
            })
            .state('shell.products.all', {
                url: '/all',
                views: {
                    'productsContainer@shell.products': {
                        template:'<products-list products="vm.products"  on-selected="vm.setKey"></products-list>'
                     }
                }
            })
            .state('shell.products.sub', {
                url: '/sub/{key}',
                views: {
                    'productsContainer@shell.products': {
                        template:'<products-list products="vm.subProducts" key-for-search="vm.key"></products-list>'
                     }
                }
            });
            /* Add New States Above */

        });
})();
