(function(angular) {
    var app = angular.module('andrew', []);
    app.controller('gridController', ['$scope', function($scope){
        var sudoku = new Game();
        $scope.dataVar = gridArray;
        $scope.$watch('dataVar', function(){
            sudoku.updateData($scope.dataVar);
            sudoku.checkBoxTotals();
        }, true);
    }]);

})(window.angular);


