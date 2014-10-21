/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class questions
 *@description
 *@time 2014-10-19 18:31
 *@author StarZou
 **/
'use strict';

var divNode = document.getElementById('content'),
    h1Node = document.getElementById('title');

var pNode = divNode.getElementsByTagName('p')[0];

// 将h1中的文字替换成 “DOM培训”
h1Node.firstChild.nodeValue = 'DOM培训';
//h1Node.innerText = 'DOM培训';

// 2、在h1后追加一个<h2>,内容为 “这一节主要将DOM基础API”
var h2Node = document.createElement('h2'),
    h2TextNode = document.createTextNode('这一节主要将DOM基础API');
h2Node.appendChild(h2TextNode);
divNode.insertBefore(h2Node, pNode);

// 3、移除<p>
//pNode.parentNode.removeChild(pNode);
divNode.removeChild(pNode);

// 4、将h2 与h1 对换位置
divNode.appendChild(h1Node);

// 5、清空div内容
divNode.textContent = ''; // W3C标准属性, innerText属性是IE私有的

// 6、最佳的方式创建下面文档片段，追加在div# content前
var fragment = document.createDocumentFragment(),
    div = document.createElement('div'),
    ol = document.createElement('ol'),
    arr = ['A', 'B', 'C'],
    li;
for (var i = 0; i < arr.length; i++) {
    li = document.createElement('li');
    li.appendChild(document.createTextNode(arr[i]));
    fragment.appendChild(li);
}
ol.appendChild(fragment);
div.appendChild(ol);
document.body.insertBefore(div, divNode);