// ==UserScript==
// @name         Autologin Wifi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       HunT.
// @match        http://*/*
// @icon         data:image/png;base64,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
// @updateURL    https://github.com/BoomsZaa/MaejoAtsingh/raw/main/Autologin%20Wifi.user.js
// @downloadURL  https://github.com/BoomsZaa/MaejoAtsingh/raw/main/Autologin%20Wifi.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById("username").value = "AS6218"
    document.getElementById("password").value = "4669"
    document.getElementsByClassName("login-form").login.onsubmit();
})();
