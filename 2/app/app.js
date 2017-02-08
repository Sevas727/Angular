/**
 * Created by User on 02.02.2017.
 */

import "angular";
import "angular-ui-router";
import "ng-facebook";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "angular-ui-bootstrap";
//import "angular-ui-bootstrap/dist/ui-bootstrap-csp.css";
import "../styles/css/style.css"

//@require "./Components/albums/albums.js"
//@require "./templates/*.html"

import Components from "./Components"
import Services from "./Services"
const myApp = angular.module('myApp', ['ui.router','ui.bootstrap','ngFacebook', Components.name, Services.name]);


myApp.config(function($facebookProvider) {
    $facebookProvider
        .setAppId("333688740303109");
    $facebookProvider
        .setPermissions("email,public_profile, user_posts, publish_actions, user_photos");
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