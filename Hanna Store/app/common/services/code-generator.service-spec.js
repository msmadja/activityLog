(function () {
    'use strict';

    describe('codeGenerator', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function ( codeGenerator ) {
                service = codeGenerator ;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
