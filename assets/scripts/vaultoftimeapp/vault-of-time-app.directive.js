'use strict';

var vaultOfTime = require('./vaultoftime-angular');

vaultOfTime.app
    .directive('vaultOfTime', VaultOfTime)
    .controller('VaultOfTimeController', VaultOfTimeController);

function VaultOfTime()
{
    return {
        restrict: 'E',
        replace: true,
        controller: 'VaultOfTimeController',
        controllerAs: 'ctrl',
        scope: {},
        template: require('./pages/showtime.html')
    };
}

function VaultOfTimeController() {
    var vm = this;
}
