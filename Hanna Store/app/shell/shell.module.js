(function () {
    'use strict';

    angular
        .module('shell', ['common']);

    angular
        .module('shell')
        .config(function ($stateProvider) {

            $stateProvider.state('shell', {
                url: '',
                abstract: true,
                views: {
                    '': {
                        template:'<shell-container></shell-container>'
                     }
                }
            });
            /* Add New States Above */

        });
})();
