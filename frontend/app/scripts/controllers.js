'use strict';

/* Controllers*/
App.controller('AppCtrl', [
		'$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
			// Uses the url to determine if the selected
			// menu item should have the class active.
			$scope.$location = $location;
			$scope.$watch('$location.path()', function(path) {
				return $scope.activeNavId = path || '/';
			});
			/* getClass compares the current url with the id.
			 * If the current url starts with the id it returns 'active'
			 * otherwise it will return '' an empty string. E.g.
			 *
			 *   # current url = '/products/1'
			 *   getClass('/products') # returns 'active'
			 *   getClass('/orders') # returns ''
			 */
			return $scope.getClass = function(id) {
				if($scope.activeNavId.substring(0, id.length) === id) {
					return 'active';
				} else {
					return '';
				}
			};
		}
	]).
	controller('MyCtrl1', ['$scope', function($scope) {
			return $scope.onePlusOne = 2;
		}
	]).
	controller('MyCtrl2', ['$scope', function($scope) {
			return $scope;
		}
	]).
	controller('TodoCtrl', ['$scope', function($scope) {
			$scope.todos = [
				{
					text: "learn angular",
					done: true
				},
				{
					text: "build an angular app",
					done: false
				}
			];
			$scope.addTodo = function() {
				$scope.todos.push({
					text: $scope.todoText,
					done: false
				});
				return $scope.todoText = "";
			};
			$scope.remaining = function() {
				var count;
				count = 0;
				angular.forEach($scope.todos, function(todo) {
					return count += (todo.done ? 0 : 1);
				});
				return count;
			};
			return $scope.archive = function() {
				var oldTodos;
				oldTodos = $scope.todos;
				$scope.todos = [];
				return angular.forEach(oldTodos, function(todo) {
					if(!todo.done) {
						return $scope.todos.push(todo);
					}
				});
			};
		}
	]);