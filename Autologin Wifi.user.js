// ==UserScript==
// @name         Autologin Wifi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/BoomsZaa/MaejoAtsingh/raw/main/Autologin%20Wifi.user.js
// @downloadURL  https://github.com/BoomsZaa/MaejoAtsingh/raw/main/Autologin%20Wifi.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById("username").value = "AS7595"
    document.getElementById("password").value = "2503"
    document.getElementsByClassName("login-form").login.onsubmit();
})();
