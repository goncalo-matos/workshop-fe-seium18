import { HomeService } from './home.service';

/**
 *
 * @param {HomeService} homeService
 * @returns {Promise}
 */
function getPosts(homeService) {
    return homeService.getPosts();
}

/**
 *
 * @param {angular.route.IRouteProvider} $routeProvider
 * @param {Object} paths
 * @param {string} paths.root
 */
function configHomeRoute($routeProvider, { root }) {
    $routeProvider.when(root, {
        resolve: {
            posts: ['HomeService', homeService => getPosts(homeService)]
        },
        template: '<home posts="$resolve.posts"></home>'
    });
}

export { configHomeRoute };
