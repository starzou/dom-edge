/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class text
 *@description
 *@time 2014-10-19 18:31
 *@author StarZou
 **/
'use strict';

var contentElement = document.getElementById('content'),
    contentTextNode = contentElement.firstChild; // 文本节点

//访问 和设置值
contentTextNode.data = 'new data';
contentTextNode.nodeValue = 'new nodeValue';
contentTextNode.textContent = 'sss';

//方法
contentTextNode.appendData('append Data'); // 追加数据
contentTextNode.deleteData(3, contentTextNode.length); // 移除数据
contentTextNode.insertData(1, '-insert data-');// 插入数据
contentTextNode.replaceData(1, contentTextNode.length - 3, '-replace data-'); // 替换数据
contentTextNode.splitText(5);// 从offset位置分割成2 个文本节点

contentElement.normalize();// 合并多个文本节点

console.log(contentTextNode);
console.log(contentTextNode.substringData(1, contentTextNode.length - 3));// 提前字符串