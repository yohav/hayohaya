/**
 * Created by lenovo on 9/25/2016.
 */
(function(angular) {
    'use strict';
    angular.module('time-slider-module', [])

        .component('time-slider',{
            template:`
            djsbfhdsbfhbdsjfbjdsbfh
                <md-slider-container>
                    <span>R</span>
                    fjesfhdshklfbds
                    gds
                    g
                    fg
                    fdg
                    fd
                    g
                    <md-slider flex min="0" max="255" ng-model="color.red" aria-label="red" id="red-slider">
                    </md-slider>
                </md-slider-container>
            `,
            controller:'TimeSliderComponent'
        });

    function TimeSliderComponent() {
        var vm=this;
    }
})(window.angular);
