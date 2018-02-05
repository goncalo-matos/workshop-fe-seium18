import angular from 'angular';

import './post.scss';

import { PostComponent } from './post.component';
import { PostService } from './post.service';

const PostModule = angular.module('post', []);

PostModule.component('post', PostComponent);

PostModule.service('PostService', PostService);

export default PostModule.name;
