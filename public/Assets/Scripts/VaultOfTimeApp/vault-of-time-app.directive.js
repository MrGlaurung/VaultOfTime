(function() {

    angular
        .module('VoTApp')
        .directive('vaultOfTimeApp', VaultOfTimeApp)
        .controller('VaultOfTimeAppController', VaultOfTimeAppController);

    function VaultOfTimeApp()
    {
        return {
            restrict: 'E',
            replace: true,
            controller: 'VaultOfTimeAppController',
            controllerAs: 'ctrl',
            scope: {},
            templateUrl: "/Assets/Scripts/VaultOfTimeApp/Pages/showtime.html"
        };
    }

    function VaultOfTimeAppController()
    {
        var vm = this;

        vm.people = People;
    }

})();