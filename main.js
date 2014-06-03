var myApp = angular.module('myapp',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {

	//
	$scope.test = "some might say!";

	$scope.a = 39;
	$scope.b = 12;
	$scope.c = $scope.a + $scope.b; //aやbの値に変更が入ったとき、cの値は自動的に反映されるのか => それは無理

	//jQueryも使える
	var jQuery = angular.element;
	jQuery('#div_test').html('some nights');

	//
	$scope.changeValueOfA = function(){
		$scope.a = 3;
	};

	//
	$scope.clickHandler = function(){
		global.someFunc(); //グローバル変数の処理も行える ex)selfytown.hogehoge.error();
	};

	var apiReturnObj = {
		'itemId':123400,
		'itemName':'cool waves',
		'bonusPoint':8888,
		'commentList':[
			'hi!!',
			'amen...',
			'i got a life!',
			'only in my dream'
		]
	};

	$scope.apiData = apiReturnObj;

}]);