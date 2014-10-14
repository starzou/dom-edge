/**
 *@class index
 *@description animate.css 研究
 *@time 2014-10-14 13:29
 *@author StarZou
 **/


var btnView = document.getElementById('btnView');
var animateElement = document.getElementById('animateElement');
btnView.addEventListener('click', function (event) {
    animateElement.setAttribute('class', 'animated bounceOutLeft');
});