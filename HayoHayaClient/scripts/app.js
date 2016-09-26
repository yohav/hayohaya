/**
 * Created by lenovo on 9/25/2016.
 */

   var app= angular.module('app', ['ngMaterial','ngAnimate','ui.router','jkAngularCarousel','schemaForm'])

        .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
        .value('serverUrl',"http://localhost:3000")
        .config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {

                $urlRouterProvider

                    .when('/c?id', '/contacts/:id')
                    .when('/user/:id', '/contacts/:id')

                    .otherwise('/');

                $stateProvider

                    .state("offersBoard", {
                        url: "/",
                        templateUrl: 'scripts/offersBoard/offersBoard.html'
                    })

                    ///////////
                    // About //
                    ///////////

                    .state('createOffer', {
                        url: '/createOffer',
                        templateUrl:'scripts/lesson-details/lesson-details.html'
                    })
            }
        ]
    );
