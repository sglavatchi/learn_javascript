var a = "hello world";
var b = 45;

console.log(a.length);
console.log(b.toFixed(4));

///////////////////////// implicit coercion //////////////////////////////

var a = "50";
var b = 45 * a;

console.log(a.length);
console.log(b.toFixed(4));

///////////////////////// explicit coercion //////////////////////////////

var a = "50";
var b = new Number(55 * a);

console.log(a.length);
console.log(b.toFixed(4));

///////////////////////// array comparision //////////////////////////////

var a = ["1", "2", "3"];
var b = ["1", "2", "3"];
var c = "1,2,3";

if (a == b) {
    console.log("a is equal with b");
}
else if (a == c) {
    console.log("a is equal with c");
}

if (b == c) {
    console.log("b is equal with c");
}

console.log(a);
console.log(b);
console.log(c);

///////////////////////// strict mode //////////////////////////////

function foo() {
    "use strict";   // turn on strict mode
    a = 1;          // `var` missing, ReferenceError

    console.log(a);
}

///////////////////////// hoisting //////////////////////////////

foo();

var a = 2;

foo();                  // works because `foo()`
// declaration is "hoisted"

function foo() {
    a = 3;

    console.log(a);   // 3

    var a;              // declaration is "hoisted"
    // to the top of `foo()`
}

console.log(a);   // 2

///////////////////////// Imideitly executed futnions //////////////////////////////

function foo() { console.log('') }

// `foo` function reference expression,
// then `()` executes it
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE() { console.log('') })();

//***

var x = (function IIFE() {
    return 42;
})();

x;  // 42

///////////////////////// hoisting //////////////////////////////

//https://www.safaribooksonline.com/library/view/you-dont-know/9781491924471/ch02.html#chapter-2-into-javascript

//closure and next

