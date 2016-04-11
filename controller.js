/// <reference path="typings/angularjs/angular.d.ts" />
angular.module('app', [])
    .controller('MainCtrl', ['$http', function ($http) {
        var self = this;
        self.viewToken = function (tokenKey) {
            $http.get(['http://555f372a.ngrok.io/View/', tokenKey].join(""))
            .then(function successCallback(response) {
                self.response = response;
            }, function errorCallback(response) {
                self.response = response.data;
            });
        }
    }]);