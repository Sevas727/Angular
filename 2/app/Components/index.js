/**
 * Created by User on 07.02.2017.
 */
import angular from 'angular';
import auth from './auth/auth';
import albums from './albums/albums';
import menu from './menu/menu';

export default angular.module('myApp.components', [
    auth.name,
    albums.name,
    menu.name
]);