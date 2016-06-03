(function () {
    'use strict';

angular.module('activityLog').service('activityLogService' , ActivityLogService);


 function ActivityLogService() {
     
     
     //PRIVATE
     var _model = {
         name:"ActivityLog = Service Binding"
     };
      
      
      
    //PUBLIC
    var service = {
        model:_model,
        doSomething:_doSomething
    }
     
     
     /**
      * @name:doSomething(param)
        @description: do Something.
      */
     function _doSomething(param) {
         
         
     }
      
    
    return service;
  }
  
  
})();