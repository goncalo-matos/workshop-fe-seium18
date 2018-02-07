import { BEClientProvider } from './common/clients/be-client.service';
import routes from 'proxy.config.js';

/**
 *
 * @param {BEClientProvider} bEClientProvider
 */
function configClients(bEClientProvider) {
    bEClientProvider.setEndpoints({
        posts: routes.posts,
        post: routes.post
    });
}

configClients.$inject = ['BEClientProvider'];

export { configClients };
