/**
 * Created by User on 03.02.2017.
 */
import temp from "../Templates/incoming.html";


angular.module('incomingDrc', []).directive('incomingDrc', function () {
    return {
        restrict: "E",
        scope: true,
        template : temp,
        controllerAs: "ctrl",
        controller: function(){
            this.greeting = 'hello';

            this.inc = {
                title: 'Входящие',
                msg: [[{name: "name1"},{name: "name2"}],[{name: "name3"},{name: "name4"}]]
            };

            this.out = {
                title: 'Исходящие',
                msg: [[{name: "name5"},{name: "name6"}],[{name: "name7"},{name: "name8"}]]
            };

            this.mail = this.inc;

            this.onChange = function(){

                if(this.mail == this.inc){
                    this.mail = this.out;
                } else {
                    this.mail = this.inc;
                }
            }
        },
        link: function(){
            //scope.name
        }
    };
});