/**
 * Created by lenovo on 9/25/2016.
 */

app.service('offersBoardService',OffersBoardService)

    OffersBoardService.$inject=['$http','$q','serverUrl'];

    function OffersBoardService($http,$q,serverUrl){

        this.getOffers=function(){
            console.log(serverUrl);
            return $http.get(`${serverUrl}/lessons`);
            //return defer.promise;
        };

    }
//return [
//    {
//        name:"math",
//        publisher:"1",
//        description:'vectors',
//        pointsForCompletion:20,
//        hours:5,
//        theme:"https://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/math.jpg"
//    },
//    {
//        name:"english",
//        publisher:"1",
//        description:'present simple',
//        pointsForCompletion:30,
//        hours:5,
//        theme:"http://cdn.playbuzz.com/cdn/e98ee216-fa22-46cd-8c20-8399749db2f5/3ff0c3ee-d94d-44fa-8460-9e2180b02627.jpg"
//    },
//    {
//        name:"physics",
//        publisher:"1",
//        description:'bombs',
//        pointsForCompletion:10,
//        hours:5,
//        theme:"http://artegyptgroup.com/nrc/wp-content/uploads/2016/05/Physics-1920x960.jpg"
//    }
//];
