/**
 * Created by User on 02.02.2017.
 */

import "angular";
import "angular-ui-router";
import "ng-facebook";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "angular-ui-bootstrap";
import "../styles/css/style.css"

import Components from "./Components"
import Services from "./Services"
import Directives from "./Directives"

const myApp = angular.module('myApp', ['ui.router','ui.bootstrap','ngFacebook',
    Components.name, Services.name, Directives.name]);


myApp.config(function($facebookProvider) {
    $facebookProvider
        .setAppId("1573406859629628");
    $facebookProvider
        .setPermissions("email, public_profile, user_posts, publish_actions, user_photos");
    $facebookProvider.setCustomInit({
        cookie: true
    });
});

myApp.run(function(){
        // Code from FBook JS SDK
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
});