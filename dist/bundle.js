!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t),$(document).ready(function(){$("#ping-pong-form").submit(function(n){n.preventDefault(),function(n){for(var t=[],e=1;e<=n;e++)e%15==0?t.push("ping-pong"):e%3==0?t.push("ping"):e%5==0?t.push("pong"):t.push(e);return t}($("#goal").val()).forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})})}]);