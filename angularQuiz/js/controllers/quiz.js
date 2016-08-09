(function(){
    angular
        .module("turtleFacts")
        .controller("quizCtrl",QuizController);

    QuizController.$inject = ['$scope','quizMetrics', 'DataService'];

        function QuizController($scope, quizMetrics, DataService){
            var vm = $scope;

            vm.quizMetrics = quizMetrics;
            vm.dataService = DataService;
        }


})();