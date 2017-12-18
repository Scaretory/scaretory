angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('Services', function($q){
	function promiseAdded(obj) {
		var promise = $q.defer();

		obj.on('child_added', function(data) {
			promise.resolve(data.val());
		}, function(err) {
			promise.reject(null);
			console.log("Error fetch data");
		});

		return promise.promise;
	}

	function promiseValue(obj) {
		var promise = $q.defer();

		obj.on('value', function(data) {
			promise.resolve(data.val());
		}, function(err) {
			promise.reject(null);
			console.log("Error fetch data");
		});

		return promise.promise;
	}
});