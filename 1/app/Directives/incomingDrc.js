/**
 * Created by User on 03.02.2017.
 */

import "angular";
import temp from "../Templates/incoming.html";


const incomingDir = angular.module('incomingDir', []);

incomingDir.directive('incomingDrc', function () {
    return {
        restrict: "E",
        scope: true,
        template : temp,
        link: function(){
            //scope.name
        }
    };
});