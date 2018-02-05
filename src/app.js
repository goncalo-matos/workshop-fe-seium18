import angular from 'angular';
import ngRoute from 'angular-route';

import './app.scss';

import { ClientsModule } from './common/clients';
import { HomeModule } from './home';

import { config as appConfig } from './app.config';
import { configRoute } from './route.config';
import { configClients } from './clients.config';

const appModule = angular.module('app', [ngRoute, ClientsModule, HomeModule]);

appModule.config(appConfig);
appModule.config(configRoute);
appModule.config(configClients);

export default appModule.name;
