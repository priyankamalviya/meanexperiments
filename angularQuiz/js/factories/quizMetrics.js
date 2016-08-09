(function() {
    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);

        function QuizMetrics() {
            var quizObj = {
                quizActive: false,
                changeState: changeState // changeState is a named function below
            };

            return quizObj;

            function changeState(state) {
                quizObj.quizActive = state;
            }

        }
})();