import './stylesheets/application.css!';
import 'babel/external-helpers';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ui-router-extras';
import ocLazyLoad from 'oclazyload/dist/modules/ocLazyLoad.core';
import routingConfig from './config/routing';
import errorHandlingConfig from './config/error-handling';
import constants from './config/constants.json!';
import ApplicationController from './application-controller';
import applicationRoute from './application-route';

const dependencies = [
    uiRouter,
    ocLazyLoad,
    'ct.ui.router.extras',
    'ct.ui.router.extras.future'
];

const app = angular
    .module('application-component', dependencies)
    .controller('ApplicationController', ApplicationController)
    .config(routingConfig)
    .config(applicationRoute)
    .run(errorHandlingConfig);

Object.keys(constants).forEach(function(constantName) {
    app.constant(constantName, constants[constantName]);
});

export default app;
