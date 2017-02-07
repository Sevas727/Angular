/**
 * Created by User on 07.02.2017.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module('albums',[uiRouter])

    .component('albums', {
        templateUrl: 'templates/albums.html',
        controller: ['$scope', 'facebookApiSvc',
            function albumsController($scope, $facebookApiSvc) {

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
    });



let authModule = angular.module('auth', [
    uiRouter
]);

authModule.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('auth', {
            url: '/',
            template:  '<auth></auth>',
        });
});

authModule.component('auth', {
    template: `<h3>{{$ctrl.name}} Solar System!</h3>`,
    controller: function(){
        this.name = 'my test name';
    },
    /*bindings: {
     count: '='
     }*/
});

export default authModule;