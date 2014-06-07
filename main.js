var myApp = angular.module('myapp',['ui.router']); //'app'だとダメぽい・・・

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

	//APIのデータ構造をそのままオブジェクトで受け取って
	//あとはhtml側で
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

	$scope.callFromOutside = function(){
		alert("this is called from outside!");
	}

}]);


//以下factory

myApp.factory('MainFactory', function(){
	return {
		'position' : 'MF',
		'kick' : function(){
			alert('GOOOOOOOOOAL!!!!');
		}
	}
});


//xxxxxxxxxxx

myApp.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/state1");
	
	//
	// Now set up the states
	$stateProvider.
	state('state1', {
		url: "/state1",
		templateUrl: "partials/state1.html"
	}).state('state1.list', {
		url: "/list",
		templateUrl: "partials/state1.list.html",
		controller: function($scope) {
			$scope.items = ["A", "List", "Of", "Items"];
		}
	}).
	state('state2', {
		url: "/state2",
		templateUrl: "partials/state2.html"
	}).state('state2.list', {
		url: "/list",
		templateUrl: "partials/state2.list.html",
		controller: function($scope) {
			$scope.things = ["A", "Set", "Of", "Things"];
		}
	})
});	


//以下カスタムディレクティブ	

myApp.directive('testdirectiveelem', function(){ //ここも小文字じゃないとダメなのか
		return{
			//E=要素, A=属性
			restrict: 'E',
			//優先度
			// priority:0,
			//テンプレ
			template: '<div>this is testDirectiveElem</div>',
			// templateUrl: './directiveTest.html',
			//置き換えるか or 要素の中にいれるか
			replace: true,
			//(true) or (false) or ({@, =, &})
			scope: true,
			//
			link: function(scope, element, attrs){
				
				scope.point = 0;

				element.bind('click', function(){
					scope.point++;
					alert(scope.point);
				});
			}
		};
});

myApp.directive('testdirectiveattr', function(){
		return{
			//E=要素, A=属性
			restrict: 'A',
			//優先度	
			// priority:0,
			//テンプレ
			template: '<div>this is testDirectiveAttr</div>',
			//置き換えるか or 要素の中にいれるか
			replace: true,
			//(true) or (false) or ({@, =, &})
			scope: true,
			//
			link: function(scope, element, attrs){
				
				element.bind('click', function(){
					global.someFunc();					
				});
			}
		};
});