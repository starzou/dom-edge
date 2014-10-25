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

console.log(document.querySelector('#main-div>.green') === p);
