/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class Node
 *@description Node 类型讲解
 *@time 2014-10-18 19:47
 *@author StarZou
 **/
'use strict';

var titleElement = document.getElementById('title'),
    divElement = document.getElementById('div');

console.log(divElement.childNodes); // 基于DOM的动态查询的结果
titleElement.childNodes[0].nodeValue = "New Title"; // 改变节点值
console.log(titleElement);

var h2 = document.createElement('H2'),
    textNode = document.createTextNode('text...');
h2.appendChild(textNode);