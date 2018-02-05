import { BEClientProvider } from './common/clients/be-client.service';

/**
 *
 * @param {BEClientProvider} bEClientProvider
 */
function configClients(bEClientProvider) {
    bEClientProvider.setEndpoints({
        posts: '/api/posts',
        post: '/api/post'
    });
}

configClients.$inject = ['BEClientProvider'];

export { configClients };
