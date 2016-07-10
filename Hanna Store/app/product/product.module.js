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
                        template:'<product-manager></product-manager>'
                     }
                }
            });
            /* Add New States Above */

        });
})();
