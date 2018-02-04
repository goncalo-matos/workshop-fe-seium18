import angular from 'angular';

import { config as appConfig } from './app.config';

const appModule = angular.module('app', []);

appModule.config(appConfig);

export default appModule.name;
