(function(){
    angular
        .module("turtleFacts")
        .controller("quizCtrl",QuizController);

    QuizController.$inject = ['$scope','quizMetrics'];

        function QuizController($scope, quizMetrics){
            var vm = $scope;

            vm.quizMetrics = quizMetrics;
        }
})();