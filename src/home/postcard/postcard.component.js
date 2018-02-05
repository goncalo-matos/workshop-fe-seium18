import templateUrl from './postcard.html';
import './postcard.scss';
import { PostcardController } from './postcard.controller';

const PostCardComponent = {
    templateUrl,
    controller: PostcardController,
    bindings: {
        post: '<'
    }
};

export { PostCardComponent };
