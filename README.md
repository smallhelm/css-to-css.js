# css-to-css.js
Compile css into js code that injects styles on the browser and is safe to run on the server.

## How to use it
```js
var cssToCssJs = require("css-to-css.js");

var js = cssToCssJs("body {color: blue;}");
```
Which returns
```js
!function(e){if("undefined"==typeof document)return e;var t=document,n="CSS_TO_CSSJS";if(t[n]=t[n]||{},!t[n][e]){t[n][e]=!0;var r=t.createElement("style");return r.setAttribute("type","text/css"),"textContent"in r?r.textContent=e:r.styleSheet.cssText=e,t.getElementsByTagName("head")[0].appendChild(r),e}}("body {color: blue;}");
```
When you execute that javascript:

In the browser
 * injects the css into the `<head>`
 * returns the css code as a string

On the server
 * returns the css code as a string

Typically you save the javascript to a file then you can `require` it using browserify/node.

## Install
```sh
$ npm install --save css-to-css.js
```

## License
MIT
