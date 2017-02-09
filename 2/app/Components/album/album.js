/**
 * Created by User on 07.02.2017.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular.module('album',[uiRouter ])

    .config(($stateProvider, $urlRouterProvider) => {

            $stateProvider
                .state('album', {
                    url: '/album/{albumId}/{albumName}/',
                    template:  '<album></album>',
                });
    })

    .component('album', {
        template: require('./album.html'),
        controller: function($scope, $rootScope, facebookApiSvc, $stateParams) {

            facebookApiSvc.refresh();

            $rootScope.section = 'view';
            $scope.albumId = $stateParams.albumId;
            $scope.albumName = $stateParams.albumName;
            $scope.flagEndPhotoDownload = false;
            $scope.photoLimit = 50;
            $scope.offset = 50;

            $scope = facebookApiSvc.getPhotos($scope);

            $scope.scroll = function(elem){

                elem.height(document.documentElement.clientHeight - 210);
                elem[0].onscroll = function() {

                    var raw = elem[0];
                    var elemHeight = document.documentElement.clientHeight - 210;
                    elem.height(elemHeight);

                    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - 1) {

                        $scope = facebookApiSvc.getPhotos($scope);

                    }
                }
            }

            $scope.scroll($(".images--list"));

        }
    })
