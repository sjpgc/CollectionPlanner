var collectionPlanner = angular.module('collectionPlanner', []);

collectionPlanner.controller('StampsCatalogueController', ['$scope',
    function($scope) {
        $scope.collectibles = collectibles();
        $scope.stampsCatalogue = $scope.collectibles.stamps;
    }
]);
        