(function(){
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

        ResultsController.$inject = ['$scope', 'quizMetrics', 'DataService'];

        function ResultsController($scope, quizMetrics, DataService){
            var vm = $scope;
            vm.quizMetrics = quizMetrics;
            vm.DataService = DataService;
        }
})();