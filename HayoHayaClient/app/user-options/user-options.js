/**
 * Created by lenovo on 9/26/2016.
 */
app.directive('userOptions',UserOptions)

function UserOptions(){
    return {
        transclude: true,
        templateUrl:"app/user-options/user-options.html",
        controller: ['$scope', function UserOptionsController() {
            var vm=this;
        }]
    }


}