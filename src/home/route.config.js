/**
 *
 * @param {angular.route.IRouteProvider} $routeProvider
 * @param {Object} paths
 * @param {string} paths.root
 */
function configHomeRoute($routeProvider, { root }) {
    $routeProvider.when(root, {
        template: '<home></home>'
    });
}

export { configHomeRoute };
