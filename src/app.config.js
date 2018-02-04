/**
 * Configures the app
 *
 * @param $compileProvider {angular.ICompileProvider}
 * @param $locationProvider {angular.ILocationProvider}
 */
function config($compileProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}

config.$inject = ['$compileProvider', '$locationProvider'];

export { config };
