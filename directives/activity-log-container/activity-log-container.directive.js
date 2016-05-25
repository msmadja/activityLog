(function () {
    'use strict';
    
   
angular.module('activityLog').directive('activityLogContainer', ActivityLogContainerDirective);



function ActivityLogContainerDirective($log) {
   
    $log.debug("ActivityLogContainerDirective init()");
      
   var directive={
      restrict:'EA',
      scope:{},
      controller:ActivityLogContainerController,
      controllerAs:'vm',
      bindToController:true,
      templateUrl:'/app/activity-log/directives/activity-log-container/activity-log-container.template.html'
   };
   
   
    function ActivityLogContainerController($log , activityLogService) {
       
      $log.debug("ActivityLogContainerController init()"); 
        
       var vm = this;
       
       //PUBLIC
       vm.name = "ActivityLogContainerController";
       vm.model= activityLogService.model;
       
       
       //PRIVATE
       function _doSomething(params) {
           
       }
       
       
    }
       
       
    return directive;
}
 
    
})();