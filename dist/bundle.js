(()=>{"use strict";var r={28:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  padding: 2rem;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.random-id {\r\n  margin: 2rem 0;\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: blueviolet;\r\n  color: #fff;\r\n  font-size: 1.7rem;\r\n  letter-spacing: 0.6px;\r\n  padding: 1rem 1.5rem;\r\n  cursor: pointer;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;EAC5B,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,eAAe;AACjB",sourcesContent:["*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  padding: 2rem;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.random-id {\r\n  margin: 2rem 0;\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: blueviolet;\r\n  color: #fff;\r\n  font-size: 1.7rem;\r\n  letter-spacing: 0.6px;\r\n  padding: 1rem 1.5rem;\r\n  cursor: pointer;\r\n}\r\n"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var d=[].concat(r[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var A=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:A,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var d=e(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),u=e(216),d=e.n(u),p=e(589),l=e.n(p),f=e(28),A={};A.styleTagTransform=l(),A.setAttributes=s(),A.insert=i().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=d(),n()(f.Z,A),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector(".random-id");document.querySelector(".btn").addEventListener("click",(function(r){const n=(console.log(Date.now().toString(36)+Math.random().toString(36).substring(2)),Date.now().toString(36)+Math.random().toString(36).substring(2));m.textContent=n}))})()})();
//# sourceMappingURL=bundle.js.map