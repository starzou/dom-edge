/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class Document
 *@description
 *@time 2014-10-19 10:21
 *@author StarZou
 **/
'use strict';

var tags = document.getElementsByTagName('*'),
    classes = document.getElementsByClassName('red');

console.log(document);
console.log(tags);
console.log(tags.namedItem('feel'));
console.log(classes);