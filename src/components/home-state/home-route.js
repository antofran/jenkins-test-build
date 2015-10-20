import template from './home-state.html!text';

function homeRouteConfig($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: 'home',
            views: {
                application: {
                    template: template,
                    controller: 'HomeStateController as homeStateController'
                }
            }
        });
}

export default [
    '$stateProvider',
    homeRouteConfig
];
