import angular from 'angular';

import './home.scss';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { PostCardComponent } from './postcard';

const HomeModule = angular.module('home', []);

HomeModule.component('home', HomeComponent);
HomeModule.component('postcard', PostCardComponent);

HomeModule.service('HomeService', HomeService);

export default HomeModule.name;
