'use strict';

angular.module('App')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            {
                'key'        : 'dom',
                'title'      : 'DOM',
                'url'        : '#/dom',
                'description': 'DOM 技术研究!',
                'logo'       : 'browsersync.png'
            },
            {
                'key'        : 'animate',
                'title'      : 'animate.css',
                'url'        : 'app/animate/index.html',
                'description': 'animate.css',
                'logo'       : 'browsersync.png'
            }
        ];
        angular.forEach($scope.awesomeThings, function (awesomeThing) {
            awesomeThing.rank = Math.random();
        });
    });
