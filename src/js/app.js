/*
 * @Author: step
 * @Date:   2017-03-29 17:15:39
 * @Last Modified by:   step
 * @Last Modified time: 2017-03-31 11:05:48
 */

'use strict';

angular.module('sstock', ['ngRoute','stepstock_news','stepstock_data','stock.directives.autofocussubmenu'])
    .constant('AppConfig', {
        appKey: '721e6dcd3255ef38906e4706d4abb885'
    })
    .config(['$routeProvider',function($routeProvider){
    	$routeProvider.otherwise({redirectTo:'/StockNews'});
    }])
    .controller('sstockController', ['$scope',
        '$location',
        '$http',
        'AppConfig',
        function($scope, $location, $http, AppConfig) {
            
        }
    ]);
