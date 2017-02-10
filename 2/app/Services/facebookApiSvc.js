/**
 * Created by User on 07.02.2017.
 */

import angular from "angular";

export default angular.module('facebookApiSvc', [])

    .factory('facebookApiSvc', ['$facebook', '$location',
        function ($facebook, $location) {
            let facebookApiSvc = {  //build this object however you want

                isAuth: false,

                login: function() {

                    $facebook.login()
                        .then(function(response) {
                            if(response.status == "connected"){
                                this.isAuth = true;
                                $location.path("/albums");
                                sessionStorage.setItem('access_token', response.authResponse.accessToken);
                            }
                        });
                },

                check: function() {
                    console.log('check this.isAuth', this.isAuth);
                    if(this.isAuth == true){
                        return true;
                    } else {
                        return false
                    };
                    /*
                     $facebook.getLoginStatus()
                        .then((response)=>{
                            return response;
                            console.log('response',response);
                            if(response.status == "connected"){
                                return true;
                            }
                            return false;
                        });
                     */
                },

                refresh: function() {
                    $facebook.api("/me").then(
                        function(response) {
                        },
                        function(err) {
                            $location.path("/");
                        });
                },

                getPhotos: function ($scope) {

                    if ($scope.flagEndPhotoDownload) return;

                    $scope.flagEndPhotoDownload = true;

                    if(!$scope.images){

                        $facebook.api($scope.albumId + '/photos/?fields=images,id,name,created_time&order=reverse_chronological&limit='+$scope.photoLimit)

                            .then(function (response) {
                                $scope.images = response.data;
                            })
                    } else {

                        $facebook.api($scope.albumId + '/photos/?fields=images,id,name,created_time&order=reverse_chronological&limit='+$scope.photoLimit+'&offset='+ $scope.offset)
                            .then(function (response) {

                                var newImages = response.data;
                                $scope.images = $scope.images.concat(newImages);
                                $scope.offset += newImages.length;

                            })
                    }

                    $scope.flagEndPhotoDownload = false;

                    return $scope;

                },

                getName: function () {
                    return $facebook.api('/me')
                        .then(function (response) {
                            return response.name;
                        });
                },


                getAlbums: function () {
                    return $facebook.api('/me/albums?fields=picture,name,count,created_time,updated_time')
                        .then(function (response) {
                            return response.data;
                        });
                },
                getAlbumsID: function () {
                    return $facebook.api('me/albums')
                        .then(function (response) {
                            return response.data;
                        });
                },

                getImage: function(imgId){

                    return $facebook.api('/' + imgId + '/?fields=images,name')
                        .then(function (response) {
                            return response;
                        })
                }
            };

            return facebookApiSvc;
        }]);

/*
class GithubService {

    constructor($http) {
        this.$http = $http;
        alert('Service constructor work')
    }

    get(){alert('Service work')};

    getItems(githubUsername) {
        var githubUrl = 'https://api.github.com';
        return this.$http({
            method: 'JSONP',
            url: githubUrl + '/users/' +
            githubUsername + '?callback=JSON_CALLBACK'
        }).success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            return data.data.toJSON();
        }).
        error(function(data, status) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert(status);
        });
    }

}

export default GithubService;
 */