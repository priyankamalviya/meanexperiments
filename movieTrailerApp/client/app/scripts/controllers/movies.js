'use strict';

angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
    $scope.movies = Movie.getList().$object;
  });
