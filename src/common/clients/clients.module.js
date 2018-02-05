import angular from 'angular';
import { BEClientProvider } from './be-client.service';

const clientsModule = angular.module('clients', []);

clientsModule.provider('BEClient', BEClientProvider);

export default clientsModule.name;
