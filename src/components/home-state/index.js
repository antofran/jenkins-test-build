import './home-state.css!';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeStateController from './home-state-controller';
import homeRouteConfig from './home-route';

let dependencies = [
    uiRouter
];

export default angular
    .module('home-state-component', dependencies)
    .controller('HomeStateController', HomeStateController)
    .config(homeRouteConfig);
