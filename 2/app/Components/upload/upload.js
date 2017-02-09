/**
 * Created by User on 09.02.2017.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular.module('upload',[uiRouter])

    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state('upload', {
                url: '/upload',
                template:  '<upload></upload>',
            });
    })

    .component('upload', {
        template: require('./upload.html'),

        controller: function(facebookApiSvc, $scope, $rootScope) {

            facebookApiSvc.refresh();

            $rootScope.section = 'upload';
            $scope.currentAlbum = "";

            facebookApiSvc.getAlbumsID()
                .then(function(data) {
                    $scope.albums = data;
                });

            $scope.catchFile = function(file){

            }

            $scope.sendImg = facebookApiSvc.sendImg

        }
    });