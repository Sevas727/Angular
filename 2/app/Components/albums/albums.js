/**
 * Created by User on 07.02.2017.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import "../../Services/facebookApiSvc";

export default angular.module('albums',[uiRouter])

    .config(($stateProvider, $urlRouterProvider) => {

            $stateProvider
                .state('albums', {
                    url: '/',
                    template:  '<albums></albums>',
                });
    })

    .component('albums', {
        template: require("./albums.html"),
        //controller: function(){}
        controller: ['$scope', 'facebookApiSvc',
            function($scope, $facebookApiSvc) {

                facebookApiSvc.refresh();

                $scope.section = 'view';

                facebookApiSvc.getName()
                    .then(function(data) {
                        $scope.userName = data;
                    });

                facebookApiSvc.getAlbums()
                    .then(function(data) {
                        $scope.albums = data;
                    });
            }]
    })
/*
    .run(function($templateCache) {
        $templateCache.put("albums.html", require("./albums.html"));
        $templateCache.put("menu.html", require("./menu.html"));
    });
*/
