/*
 * @Author: step
 * @Date:   2017-03-30 15:10:58
 * @Last Modified by:   step
 * @Last Modified time: 2017-03-30 16:27:14
 */

(function(angular) {
    'use strict';
    //1.0 定义Module
    var module = angular.module('stepstock_news', ['ngRoute']);
    //2.0 定义Route
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/StockNews', {
            templateUrl: 'StockNews.html',
            controller: 'SNewsController'
        });
    }]);
    //3.0 定义Controller
    module.controller('SNewsController', ['$scope',
        '$route',
        '$http',
        'AppConfig',
        function($scope, $route, $http, AppConfig) {
            //1.0 Init
            $scope.stockName = '';
            $scope.newsList = null;

            //2.0 Fuction
            $scope.search = function() {
                console.log($scope.stockName);
                var urlNews = 'http://op.juhe.cn/onebox/stock/query?key=' + AppConfig.appKey + '&stock=' + $scope.stockName + '&callback=JSON_CALLBACK';
                $http.jsonp(urlNews)
                    .success(function(data) {
                        if (data.result) {
                            if (data.result.length > 0) {
                                console.log(data.result[0].data.show_result);
                                $scope.newsList = data.result[0].data.show_result;
                            } else {
                                $scope.newsList = null;
                            }
                        } else {
                            $scope.newsList = null;
                        }
                    })
                    .error(function(data) {
                        console.log(data);
                    });
            };
        }
    ]);

})(angular);
