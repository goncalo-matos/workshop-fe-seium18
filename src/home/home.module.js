import angular from 'angular';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

const HomeModule = angular.module('home', []);

HomeModule.component('home', HomeComponent);
HomeModule.service('HomeService', HomeService);

export default HomeModule.name;
