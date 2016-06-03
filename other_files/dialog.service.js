(function() {
    'use strict';

    /* JAVASCRIPT */

    /**
     * @name DialogService Object/function
     */
    function DialogService($log, $q, PubSub, ngDialog) {

        $log = $log.getInstance('DialogService', true);
        $log.debug("load()");

        /***************** PRIVATE *******************/
        var _dialog = null;

        /**
         * clear() - clears message(s)
         */
        function _clear() {
            _dialog = null;
        }

        /**
         * @name showDialog()
         */
        function _showDialog(title, message) {
            $log.debug("_showDialog(" + title + ", " + message + ")");
            _clear();

            var deferred = $q.defer();

            _dialog = ngDialog.open({
                template: '<div><h3>' + title + '</h3><p>' + message + '</p></div>',
                plain: true,
                className: 'ngdialog-theme-default'
            });

            _dialog.closePromise
                .then(function closed(data) {
                    $log.debug(data);
                    deferred.resolve(data);
                });

            return deferred.promise;

        }

        /**
         * @name showDialogTemplate()
         */
        function _showDialogTemplate(template, data) {
            $log.debug("_showDialogTemplate()");
            _clear();

            var deferred = $q.defer();

            _dialog = ngDialog.open({
                template: template,
                data: data,
                className: 'isra-dialog-theme'
            });

            _dialog.closePromise
                .then(function closed(data) {
                    $log.debug(data);
                    deferred.resolve(data);
                });

            return deferred.promise;

        }

        /**
         * onReload called when goals need to be reloaded.
         */
        function onDialogShow(msg) {
            _showDialog(msg["code"], msg["msg"], msg["desc"]);
        }

        // Subscribe to event
        var sub = PubSub.subscribe('dialog-show', onDialogShow);

        // init
        _clear();
        //_setMessage(100, 'hello', 'hello description');

        /****************** PUBLIC *******************/
        var service = {
            //model: _model,
            showDialog: _showDialog,
            showDialogTemplate: _showDialogTemplate,
            clear: _clear
        };

        return service;
    }

    /* ANGULAR */
    angular
        .module('message')
        .factory('dialogService', DialogService);

})();
