/**
 * Created by lenovo on 9/25/2016.
 */


app.controller('offersBoardController',OffersBoardController)

    OffersBoardController.$inject=['offersBoardService'];

    function OffersBoardController(offersBoardService){
        var vm=this;

        function init(){
            console.log('offersBoardController')
            offersBoardService.getOffers().then(function(response){
                console.log(response)
                vm.offers=response.data;
            });
            //offersBoardService.getOffers().then(function(response){
            //   console.log(response);
            //   vm.offers=response;
            //});
        }
        init();

    }
