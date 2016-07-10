(function () {
    'use strict';

    describe('productService', function () {

        var service;

        beforeEach(function () {
            module('product');

            inject(function ( productService ) {
                service = productService ;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
