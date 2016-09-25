/**
 * Created by lenovo on 9/25/2016.
 */
/**
 * Created by lenovo on 9/25/2016.
 */
(function(angular) {

    angular.module('app')
        .controller('worldMapController',WorldMapController);

    function WorldMapController()
    {
        var vm=this;
        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    }
})(window.angular);
