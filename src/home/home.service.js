import { BEClient } from '../common/clients/be-client.service';
import { adaptPost } from '../common/adapters/post-adapter';

class HomeService {
    /**
     * @param {BEClient} bEClient
     */
    constructor(bEClient) {
        this.bEClient = bEClient;
    }

    getPosts() {
        return this.bEClient.fetchPosts().then(posts => {
            return posts.map(post => adaptPost(post));
        });
    }
}

HomeService.$inject = ['BEClient'];

export { HomeService };
