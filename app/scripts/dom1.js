/**
 *@class dom1
 *@description
 *@time 2014-10-11 16:47
 *@author StarZou
 **/

var elements = document.all,
    i;
console.log(elements);

for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', click);
}

function click(event) {
//    console.log('event : ', event);
    console.log('this : ', this.tagName);
}

