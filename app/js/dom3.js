/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class dom3
 *@description
 *@time 2014-11-02 17:36
 *@author StarZou
 **/
'use strict';

var h1 = document.getElementById('title');
console.log(h1.style.getPropertyCSSValue('color'));
console.log(h1.style.getPropertyValue('color'));

var disableButton = document.getElementById('disableButton'),
    insertRuleButton = document.getElementById('insertRuleButton'),
    iterButton = document.getElementById('iterButton'),
    div = document.getElementById('div'),
    styleSheets = document.styleSheets,
    styleSheet;

/**
 * 禁用样式
 */
disableButton.onclick = function () {
    for (var i = 0; i < styleSheets.length; i++) {
        styleSheet = styleSheets[i]
        if (styleSheet.disabled) {
            styleSheet.disabled = false;
            disableButton.innerHTML = '禁用';
        } else {
            styleSheet.disabled = true;
            disableButton.innerHTML = '开启';
        }
    }
};

/**
 *插入样式规则
 */
insertRuleButton.onclick = function () {
    styleSheets[0].insertRule('#title{width: 300px;border: 5px solid green;}', 0);
//    styleSheets[1].deleteRule(0);
};

/**
 * 遍历元素
 */
iterButton.onclick = function () {
    var node;
    var iter = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, null, false);
    while (node = iter.nextNode()) {
        console.log(node);
    }

//    var iter = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false);
//    while (node = iter.nextNode()) {
//        console.log(node);
//    }

};


