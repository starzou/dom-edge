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

/**
 * querySelector(); 示例
 * @type {HTMLElement}
 */
var div = document.querySelector('#main-div'),
    h1 = div.querySelector('.red'),
    p = div.querySelector('.green');

console.log(div, h1, p);

var queryElement = document.querySelector('#main-div>.green');
console.log(queryElement);
console.log(queryElement === p);

/**
 * classList
 */
var button = div.querySelector('button');
button.onclick = function () {
    h1.classList.toggle('green');
//    addElement();
};

/**
 * querySelectorAll(); 示例
 * @type {NodeList}
 */
var divs = document.querySelectorAll('div');
console.log(divs);

// dataset
var html = document.documentElement;
html.dataset.version = 'version_' + Date.now();
console.log(html.innerHTML);


/**
 * innerHTML
 * @type {HTMLElement}
 */
var innerDiv = document.querySelector('#innerDiv'), str = '';
function addElement() {
    for (var i = 1; i < 60; i++) {
        str += '<li>' + i + '</li>';
    }
    innerDiv.innerHTML = str;
    console.log(innerDiv.innerText);
}

/**
 * scrollIntoView();
 * @type {HTMLElement}
 */
var showBtn = document.getElementById('showBtn');
showBtn.onclick = function () {
    button.scrollIntoView();
};