/**
 * Created by User on 09.02.2017.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular.module('photo',[uiRouter])

    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state('photo', {
                url: '/photo/{imgId}/{imgCreatedTime}/{albumName}/{albumId}/',
                template:  '<photo></photo>',
            });
    })

    .component('photo', {
        template: require('./photo.html'),
        controller: function($scope, $stateParams, facebookApiSvc) {

            facebookApiSvc.refresh();

            $scope.section = 'view';
            $scope.albumId = $stateParams.albumId;
            $scope.albumName = $stateParams.albumName;
            $scope.imgId = $stateParams.imgId;
            $scope.imgCreatedTime = $stateParams.imgCreatedTime;
            $scope.imgName;

            $scope.closestResolution = function(imagesArr){

                if(imagesArr.length == 0) return;

                var closestLeft,
                    closestRight,
                    number = window.innerWidth,
                    current;

                for (var i = 0; i < imagesArr.length; i++) {
                    current = imagesArr[i].width;
                    if (imagesArr[i].width < number && (typeof closestLeft === 'undefined' || closestLeft.width < imagesArr[i].width)) {
                        closestLeft = imagesArr[i];
                    } else if (imagesArr[i].width > number && (typeof closestRight === 'undefined' || closestRight.width > imagesArr[i].width)) {
                        closestRight = imagesArr[i];
                    }
                }

                return closestLeft.source;

            }

            facebookApiSvc.getImage($scope.imgId)
                .then(function (response) {
                    $scope.imgName = response.name;
                    $scope.images = response.images;
                    $scope.imgSrc = $scope.closestResolution($scope.images);
                })

        }
    })