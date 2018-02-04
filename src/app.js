import angular from 'angular';
import ngRoute from 'angular-route';

import { HomeModule } from './home';

import { config as appConfig } from './app.config';
import { configRoute } from './route.config';

const appModule = angular.module('app', [ngRoute, HomeModule]);

appModule.config(appConfig);
appModule.config(configRoute);

export default appModule.name;
