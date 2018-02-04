import angular from 'angular';

import { HomeComponent } from './home.component';

const HomeModule = angular.module('home', []);

HomeModule.component('home', HomeComponent);

export default HomeModule.name;
