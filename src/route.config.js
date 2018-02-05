import { configHomeRoute } from './home/';
import { configPostRoute } from './post/';

/**
 * Configures the app's router
 *
 * @param {angular.route.IRouteProvider} $routeProvider
 */
function configRoute($routeProvider) {
    configHomeRoute($routeProvider, { root: '/' });
    configPostRoute($routeProvider, { root: '/post' });
}

configRoute.$inject = ['$routeProvider'];

export { configRoute };
