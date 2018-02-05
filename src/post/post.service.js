import { BEClient } from '../common/clients/be-client.service';
import { adaptPost } from '../common/adapters/post-adapter';

class PostService {
    /**
     * @param {BEClient} bEClient
     */
    constructor(bEClient) {
        this.bEClient = bEClient;
    }

    /**
     * @param {number} id
     */
    getPost(id) {
        return this.bEClient.fetchPost(id).then(post => adaptPost(post));
    }
}

PostService.$inject = ['BEClient'];

export { PostService };
