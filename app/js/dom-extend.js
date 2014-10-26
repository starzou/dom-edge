/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class dom-extend
 *@description
 *@time 2014-10-24 23:00
 *@author StarZou
 **/
'use strict';


var div = document.querySelector('#main-div'),
    h1 = div.querySelector('.red'),
    p = div.querySelector('.green');

console.log(div, h1, p);

var queryElement = document.querySelector('#main-div>.green');
console.log(queryElement);
console.log(queryElement === p);


var button = div.querySelector('button');
button.onclick = function () {
    h1.classList.toggle('green');
};

// dataset
var html = document.documentElement;
html.dataset.version = 'version_' + Date.now();
console.log(html.innerHTML);