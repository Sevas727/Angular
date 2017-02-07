/**
 * Created by User on 07.02.2017.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

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
            template: require("./auth.html"),
            controller: function(){
                    this.name = 'my test name';
            },
            /*bindings: {
                count: '='
            }*/
    });

export default authModule;
