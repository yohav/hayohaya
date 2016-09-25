
(function(angular) {

    angular.module('app')
        .service('worldMapService',WorldMapService);


    WorldMapService.$inject=["$http"];

    function WorldMapService($http)
    {
        this.mapSettings=()=>{
            return {
                zoom:11,
                center:[40.74, -74.18],
                markers:[[40.74, -74.18],[100, -100]],
                shape:{
                    name:"circle",
                    radius:400
                }
            }
        };

        this.getLocationDetails=  (date,location) =>{
            //$http.get(`${url}/getLocationDetails`,{date,location})
            //.then(function (response) {
            //        return reponse.data;
            //});


        };
    }
})(window.angular);
