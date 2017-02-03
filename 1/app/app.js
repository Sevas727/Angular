/**
 * Created by User on 02.02.2017.
 */
import "angular";

const myApp = angular.module('postBox', ['ui.router']);

myApp.config(function($stateProvider) {
    let incoming = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }

    let outcoming = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(incoming);
    $stateProvider.state(outcoming);
});