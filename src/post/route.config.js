import { PostService } from './post.service';
import angular from 'angular';

/**
 *
 * @param {PostService} postService
 * @param {angular.route.IRouteService} $route
 * @returns {Promise}
 */
function getPost(postService, $route) {
    return postService.getPost($route.current.params.id);
}

/**
 *
 * @param {angular.route.IRouteProvider} $routeProvider
 * @param {Object} paths
 * @param {string} paths.root
 */
function configPostRoute($routeProvider, { root }) {
    $routeProvider.when(`${root}/:id`, {
        resolve: {
            post: ['PostService', '$route', (postService, $route) => getPost(postService, $route)]
        },
        template: '<post post="$resolve.post"></post>'
    });
}

export { configPostRoute };
