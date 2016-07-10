(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ShellContainer Object/function
     */
    function ShellContainer () {

        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'shell/directives/shell-container/shell-container.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('shell')
        .directive('shellContainer', ShellContainer );

})();
