(function(){const il=document.createElement("link").relList;if(il&&il.supports&&il.supports("modulepreload"))return;for(const X of document.querySelectorAll('link[rel="modulepreload"]'))r(X);new MutationObserver(X=>{for(const Z of X)if(Z.type==="childList")for(const sl of Z.addedNodes)sl.tagName==="LINK"&&sl.rel==="modulepreload"&&r(sl)}).observe(document,{childList:!0,subtree:!0});function $(X){const Z={};return X.integrity&&(Z.integrity=X.integrity),X.referrerPolicy&&(Z.referrerPolicy=X.referrerPolicy),X.crossOrigin==="use-credentials"?Z.credentials="include":X.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function r(X){if(X.ep)return;X.ep=!0;const Z=$(X);fetch(X.href,Z)}})();var kc={exports:{}},me={};/**
* @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function D1(){if($v)