import { configHomeRoute } from './home/';

/**
 * Configures the app's router
 *
 * @param {angular.route.IRouteProvider} $routeProvider
 */
function configRoute($routeProvider) {
    configHomeRoute($routeProvider, { root: '/' });
}

configRoute.$inject = ['$routeProvider'];

export { configRoute };
