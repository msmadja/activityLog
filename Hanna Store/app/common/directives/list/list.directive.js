(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * List Object/function
     */
    function List () {



        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            scope: {
                list:'=',
                type:'=',
                onSelected: '&',
                onRemove: '&'
            },
            templateUrl: 'common/directives/list/list.directive.html',
            controller:ListController,
            controllerAs:'vm',
            bindToController:true
        };

        return directive;

    }

    function ListController() {

        var vm = this;


        function _getTemplate() {
            return 'common/directives/list/templates/'+vm.type+'.template.html';
        }

        function _onClick(item) {
            vm.onSelected()(item);
        }

        vm.getTemplate = _getTemplate;
        vm.onClick = _onClick;

    }



    /* ANGULAR */
    angular
        .module('common')
        .directive('list', List );

})();
