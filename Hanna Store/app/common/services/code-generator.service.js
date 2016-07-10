(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CodeGenerator Object/function
     */
    function CodeGenerator () {

       function _generate() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }


        /****************** PUBLIC *******************/
        var service = {
            generate: _generate
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('common')
        .factory('codeGenerator', CodeGenerator );

})();
