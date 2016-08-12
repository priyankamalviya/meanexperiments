(function(){
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

        ResultsController.$inject = ['$scope', 'quizMetrics', 'DataService'];

        function ResultsController($scope, quizMetrics, DataService){
            var vm = $scope;
            vm.quizMetrics = quizMetrics;
            vm.dataService = DataService;
            vm.getAnswerClass =getAnswerClass;
            vm.activeQuestion = 0;


            function getAnswerClass(index){

                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                    return "bg-success";
                }else if(index === dataService.quizQuestions[vm.activeQuestion].selected){
                    return "bg-danger";
                }

            }
        }


})();