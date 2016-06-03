(function () {
    'use strict';

    angular.module('activityLog', []);

    angular.module('activityLog')
        .config(configBlock)
        .run(runBlock);
                     
     function configBlock($stateProvider) {
        //Config block
        
        $stateProvider.state('shell.activityLog', {
            url:'/activityLog',
            //abstract:true
            views:{
                'shellContentView@shell':{
                    template:'<activity-log-container></activity-log-container>'
                },
                'activityLogHeaderView@shell.activityLog':{
                  template:"<h1>activityLog Header</h1>"  
                },
                'activityLogFooterView@shell.activityLog':{
                  template:"<h1>activityLog footer</h1>"  
                }
            }    
        })
        .state('shell.activityLog.channa', {
           url:'/chana',
           views:{
             'activityLogContentView@shell.activityLog':{
                 template:'Hahaha'
             }   
           }
        });  
     }   
          
     function runBlock(){   
        //Run block
        
     }        
        
})();