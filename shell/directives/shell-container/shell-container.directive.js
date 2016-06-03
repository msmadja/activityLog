(function () {
    'use strict';


   angular.module('shell').directive('shellContainer', ShellContainerDirective);


    function ShellContainerDirective($log) {
      
        $log.debug("ShellContainerDirective load()");


        var directive = {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/shell/directives/shell-container/shell-container.template.html',
            controller: ShellContainerDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
        
        
        
          function ShellContainerDirectiveController($state) {

            $log.debug("ShellContainerDirectiveController load()");

            //// Public   
            var vm = this;
            vm.name = "ShellContainerDirectiveController";

            //// Private
            function _init() {
                $state.go('shell.authentication.login');
            }
            
            _init();
        }
        
        

        return directive;
    }

 

})();