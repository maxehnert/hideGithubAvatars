'use strict';

// chrome.runtime.onInstalled.addListener(function (details) {
// //  console.log('previousVersion', details.previousVersion);
// });

//chrome.browserAction.setBadgeText({text: '\'Allo'});

//console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          // return {cancel: [
          //   details.url.indexOf("://avatars1.githubusercontent.com/u/*") != -1, details.url.indexOf("://avatars2.githubusercontent.com/u/*") != -1, details.url.indexOf("://avatars3.githubusercontent.com/u/*") != -1, details.url.indexOf("://avatars4.githubusercontent.com/u/*") != -1
          // ]};
          return {cancel: [
            details.url.indexOf("avatars1.githubusercontent.com/u/*") != -1, details.url.indexOf("avatars2.githubusercontent.com/u/*") != -1, details.url.indexOf("avatars3.githubusercontent.com/u/*") != -1, details.url.indexOf("avatars4.githubusercontent.com/u/*") != -1
          ]};
        },
        {urls: ["<all_urls>"]},
        ["blocking"], console.log('does this work?'));
console.log('\'Allo \'Allo! Event Page for Browser Action');
/*
https://avatars1.githubusercontent.com/u/4215517?v=3&s=40
https://avatars1.githubusercontent.com/u/8755250?v=3&s=40

https://avatars3.githubusercontent.com/u/110953?v=3&s=120

https://avatars3.githubusercontent.com/u/8755250?v=3&s=460
*/

// 'use strict';
//
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         var currentTime = new Date();
//         if(isOfficeTime(currentTime) && isWeekday(currentTime)){
//             return {redirectUrl: chrome.extension.getURL('index.html')};
//         }
//         return details.url;
//     },
//     {
//         urls: [
//             "*://*.facebook.com/*",
//             "*://*.twitter.com/*",
//             "*://*.gmail.com/*",
//         ],
//         types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
//     },
//     ["blocking"]
// );
//
// function isOfficeTime(currentTime){
//     var hour = currentTime.getHours();
//     return hour > 9 && hour < 18;
// }
//
// function isWeekday(currentTime){
//     var dayOfWeek = currentTime.getDay();
//     return dayOfWeek >= 1 && dayOfWeek <= 5;
// }
