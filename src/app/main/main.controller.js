'use strict';

angular.module('App')
    .controller('MainCtrl', function ($scope) {
        $scope.things = [
            {
                'title': 'DOM 系列培训',
                'basePath': 'app/dom/',
                'pages': [
                    {
                        'url': 'index.html',
                        'title': 'DOM 系列培训介绍'
                    },
                    {
                        'url': 'Node.html',
                        'title': 'Node 类型讲解'
                    }
                ]
            },
            {
                'title': 'animate.css 研究',
                'basePath': 'app/animate/',
                'pages': [
                    {
                        'url': 'index.html',
                        'title': 'animate 研究'
                    }
                ]
            }
        ];
    });
