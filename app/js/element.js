/*
 * https://github.com/starzou
 *
 * Copyright (c) 2014 StarZou
 * Licensed under the MIT license.
 */

/**
 *@class element
 *@description
 *@time 2014-10-19 13:41
 *@author StarZou
 **/
'use strict';

console.log('loaded...');

// 属性的操作
var divElement = document.getElementById('div');
console.log(divElement.getAttribute('my-self'));

divElement.setAttribute('my-data', Date.now());
divElement.removeAttribute('id');


// 通过对象.getAttribute() 与 对象.属性 访问访问属性不同
var sureButton = document.getElementById('btnSure');
console.log(sureButton.onclick);
console.log(sureButton.getAttribute('onclick'));

console.log(sureButton.style);
console.log(sureButton.getAttribute('style'));

sureButton.setAttribute('my-data', '123');
sureButton.setAttribute('onclick', 'console.log(Date.now());');
sureButton.onclick();
console.log(sureButton.getAttribute('onclick'));