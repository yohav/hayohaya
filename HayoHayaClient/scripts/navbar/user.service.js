/**
 * Created by lenovo on 9/26/2016.
 */
app.service('userService',UserService)

UserService.$inject=['$http','$q','serverUrl'];

function UserService($http,$q,serverUrl){

    this.getUser=()=>{
      var defer=$q.defer();

      defer.resolve({
          name:"mo",
          picture:"http://hairstyleholic.com/wp-content/uploads/2014/09/Johny-Deep-Random-Medium-Length-Hairstyle.jpg"
      });

    return defer.promise;
    };

}