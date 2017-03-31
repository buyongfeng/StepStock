/*
 * @Author: step
 * @Date:   2017-03-31 10:24:05
 * @Last Modified by:   step
 * @Last Modified time: 2017-03-31 11:08:43
 */


(function(angular) {
    'use strict';
    angular.module('stock.directives.autofocussubmenu',[])
    .directive('autofocusSubmenu',['$location',function($location){
    	return {
    		restrict:'A',
    		link:function($scope,iElm,iAttrs,controller){
    			iElm.on('click',function(){
    				iElm.parent().parent().children().children('a').removeClass('active');
    				iElm.addClass('active');
    			});
    		}
    	};
    }]);

})(angular);
