/**
 * Created by User on 02.02.2017.
 */
import "angular";
import "./Directives/incomingDrc";


const myApp = angular.module('postBox', ['incomingDir']);

myApp.controller('postController', function(){

    this.inc = {
        title: 'Входящие',
        msg: [{name: "name1"},{name: "name2"}]
    };

    this.out = {
        title: 'Исходящие',
        msg: [{name: "name3"},{name: "name4"}]
    };

    this.mail = this.inc;

    this.onChange = function(){

        if(this.mail == this.inc){
            this.mail = this.out;
        } else {
            this.mail = this.inc;
        }
    }

});