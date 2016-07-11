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
            controller:ShellContainerController,
            controllerAs:'vm',
            bindToController:true,
            link: _link
        };

        return directive;

    }


    function ShellContainerController (localDataService){
        
        var vm = this;

        vm.service = localDataService;
    }

    /* ANGULAR */
    angular
        .module('shell')
        .directive('shellContainer', ShellContainer );

})();
