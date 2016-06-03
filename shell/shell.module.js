(function () {
    'use strict';

    angular
        .module('shell', []);

    angular
        .module('shell')
        .config(configBlock)
        .run(runBlock);
                     
     function configBlock($stateProvider){
         $stateProvider
            .state('shell', {
            url: '',
            views:{
                '':{
                    template:'<shell-container></shell-container>'
                }
              }     
            });   
     }   
          
     function runBlock(){   
    
     }  
       
   
              
})();
