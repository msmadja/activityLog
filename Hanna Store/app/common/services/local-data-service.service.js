(function () {
'use strict';

    function LocalDataService($log, $q, PubSub) {
        $log.debug('localDataService', 'load()');

        /* ----- PRIVATE  -----*/
        var _model = {
            initialized: false,
            loading: true,
            docs: null
        };

        var _db = null;

        function binarySearch(arr, docId) {
            var low = 0, high = arr.length, mid;
            while (low < high) {
                mid = (low + high) >>> 1; // faster version of Math.floor((low + high) / 2)
                if(arr[mid]._id < docId){
                    low = mid + 1;
                }
                else 
                {
                    high = mid;
                }
            }
            return low;
        }

        function search(arr , docId) {
            for(var index = 0 ; index < arr.length ; index ++){
                if(arr[index]._id === docId) {
                    return index;
                }
            }
        }

        function onDeleted(id) {
            $log.debug("localDataService onDeleted()", id);
            var index = search(_model.docs, id);
            var doc = _model.docs[index];
            if (doc && doc._id === id) {
                _model.docs.splice(index, 1);
                PubSub.publish('onDeleted', id);
            }
        }

        function onUpdatedOrInserted(newDoc) {
            $log.debug("localDataService onUpdatedOrInserted()", newDoc);
            var index = search(_model.docs, newDoc._id);
            var doc = _model.docs[index];
            if (doc && doc._id === newDoc._id) {
                // update
                _model.docs[index] = newDoc;
                PubSub.publish('onUpdated', newDoc._id);
            } else {
                // insert
                _model.docs.push(newDoc);
                PubSub.publish('onInserted', newDoc._id);
            }

            PubSub.publish('onUpdatedOrInserted', newDoc._id);
            // setData(newDoc);
        }


        function _getDocumentsByType(type) {
            $log.debug('localDataService getDocumentsByType()');
            var arr = [];

            for (var i = 0; i < _model.docs.length; i++) {
                if (_model.docs[i]['type']) {
                    if (_model.docs[i]['type'] === type) {
                        arr.push(_model.docs[i]);
                    }
                }
            }
            return arr;
        }

        


        function _save(id, doc) {

            $log.debug('localDataService save()', id, doc);

            // TODO: replace toJson...

            var json = angular.toJson(doc);

            return _db.upsert(id, function (json) {
                return doc;
            }).then(function success(result) {
                $log.debug('localDataService save().success', result);
                return true;
            }, function failure(error) {
                $log.error('localDataService save().failure', error);
                throw error;
            });
        }

        function _init() {
            $log.debug("localDataService init()");
            // Creates the database or opens if it already exists
            //_db = new PouchDB('PsaAppDb');

            _db = new PouchDB('hannastore');
            return onLoadDocs()
                .then(reactToChanges)
                .catch(console.log.bind(console));
        }


        _init();


        function reactToChanges() {
            if (_model.loading === true) { _model.loading = false; }
            if (_model.initialized === false) { _model.initialized = true; }
            _db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                if (change.deleted) {
                    $log.debug("localDataService reactToChanges()", "change.deleted");
                    // change.id holds the deleted id
                    onDeleted(change.id);
                } else { // updated/inserted
                    // change.doc holds the new doc
                    onUpdatedOrInserted(change.doc);
                }
                // renderDocs();
            }).on('error', console.log.bind(console));
        }


        function onLoadDocs() {
            $log.debug("localDataService onLoadDocs()");
            return _db.allDocs({ include_docs: true }).then(function (res) {
                _model.docs = res.rows.map(function (row) { return row.doc; });
                PubSub.publish('onLoadDocs');
            });
        }


        /* PUBLIC */
        var service = {
            get model() { return _model; },
            get versions() {
                var versions = _.find(_model.docs, function (doc) {
                    return doc["_id"] === "versions";
                });
                return versions.Versions;
            },
            save: _save,
            getDocumentsByType: _getDocumentsByType
        };

        return service;

    }

   angular.module('common').service('localDataService', LocalDataService);

})();


