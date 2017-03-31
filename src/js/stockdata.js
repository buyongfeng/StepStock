/*
 * @Author: step
 * @Date:   2017-03-30 15:11:07
 * @Last Modified by:   step
 * @Last Modified time: 2017-03-31 09:45:08
 */
(function(angular) {
    'use strict';
    //1.0 定义module
    var module = angular.module('stepstock_data', ['ngRoute']);
    //2.0 定义route
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/StockData', {
            templateUrl: 'StockData.html',
            controller: 'SDataController'
        });
    }]);
    //3.0 定义controller
    module.controller('SDataController', ['$scope',
        '$route',
        '$http',
        'AppConfig',
        function($scope, $route, $http, AppConfig) {
            //1.0 init
            $scope.stockCode = 'sz000858';
            $scope.dataList = null;
            //2.0 function
            $scope.search = function() {

                var urlData = 'http://qt.gtimg.cn/q=' + $scope.stockCode + '&callback=JSON_CALLBACK';
                //var urlNews = 'http://qt.gtimg.cn/q=' + 'sz000858' + '&callback=JSON_CALLBACK';
                var urlNews = 'http://www.it610.com?callback=JSON_CALLBACK';
                
                
            };
        }
    ]);
})(angular);
