app.controller('navbarController',NavbarController)

NavbarController.$inject=['userService'];

function NavbarController(userService){
    var vm=this;

    function init(){

       userService.getUser().then(function(response){
           vm.user=  response;
       });
        console.log(vm.user);
    }
    init();

}