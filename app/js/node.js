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

var h1Node = document.getElementById('title'),
    divNode = document.getElementById('div');

console.log(divNode.childNodes); // 基于DOM的动态查询的结果
h1Node.childNodes[0].nodeValue = "New Title"; // 改变节点值
console.log(h1Node);

var h2Node = document.createElement('h2'),
    textNode = document.createTextNode('this is text');
h2Node.appendChild(textNode);

divNode.appendChild(h2Node); // 末尾追加子节点
divNode.appendChild(h1Node); // 如果子节点存在，则移动位置


var h3Node = document.createElement('h3');
h3Node.innerText = 'H3 Node';
divNode.insertBefore(h3Node, h2Node); // 插入节点

divNode.replaceChild(h1Node.cloneNode(true), h2Node);//替换节点

divNode.removeChild(h1Node);// 移除节点