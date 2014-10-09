/**
 *@class app
 *@description App主模块,所有的模块被主模块引用
 *@time 2014-10-09 15:37
 *@author StarZou
 **/

angular.module('App', ['ngRoute', 'ngResource', 'App.controllers', 'App.services', 'App.directives', 'App.filters']);