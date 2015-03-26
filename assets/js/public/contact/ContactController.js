/**
 * Created by johngoode on 3/23/15.
 */
angular.module('ContactModule').controller('ContactController', ['$scope', '$http', function($scope, $http) {

    $scope.contactForm = {
        loading: false
    }

    $scope.submitContactForm = function() {
        $scope.contactForm.loading = true;
        //console.log('clicked!');

        $http.post('/submitForm', {
            name: $scope.contactForm.name,
            phone: $scope.contactForm.phone,
            email: $scope.contactForm.email,
            message: $scope.contactForm.message
        }).then(function onSuccess() {
                window.location = '/thanks';
        }).catch(function onError(sailsResponse) {
                console.log(sailsResponse);
        }).finally(function eitherWay() {
            $scope.contactForm.location = false;
        })
    }

}]);