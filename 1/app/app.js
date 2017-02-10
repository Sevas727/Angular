/**
 * Created by User on 02.02.2017.
 */
import "angular";
import "angular-ui-router";
import "./Directives/incomingDrc";


const myApp = angular.module('postBox', ['ui.router','ui.bootstrap','incomingDrc']);

myApp.config(function($stateProvider) {

    let helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }



    let aboutState = {

        name: 'about',
        url: '/about',
        template: '<incoming-drc></incoming-drc>',
        //controller: 'postController'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});

myApp.controller('postController', function(){



});

export default myApp;