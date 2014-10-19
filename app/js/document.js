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

var newsFragment = document.createDocumentFragment(); // 创建一个文档片段，实现高效DOM操作
var ul = document.getElementById('newsList'),
    news = ['贪官扮买菜老汉出逃', '新郎8台挖掘机迎亲', '朝鲜欲建天空敢死队'],
    li;

for (var i = 0; i < news.length; i++) {
    li = document.createElement('li');
    li.appendChild(document.createTextNode(news[i]));
    newsFragment.appendChild(li);
}
ul.appendChild(newsFragment);

