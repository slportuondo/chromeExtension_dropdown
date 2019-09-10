/*






THIS IS THE CODE FOR THE CONTENT MENU, DISABLED FOR NOW --> ALL CURRENT EXTENSION SCRIPTS LIVE IN THE CONTENT.JS SCRIPT!







*/
// // chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
// //     alert(response)
// // });
//
// const dropdownCM = {
//   'id': 'dropdown',
//   'title': 'Drop to phone',
//   'contexts': ['image']
// }
//
// chrome.contextMenus.create(dropdownCM)
//
// let pageSrc;
// let photoSrcUrl;
//
// chrome.contextMenus.onClicked.addListener((clickData) => {
//   if (clickData.menuItemId == 'dropdown' ) {
//     console.log('AHSGFHGSAKHFLASKHLSFKHASKHFAHSLKHSALKHASKHLSAKFJHL');
//     photoSrcToDrop = clickData.srcUrl
//     console.log('%c ----------------------', 'color:blue;');
//     const postReq = new XMLHttpRequest();   // new HttpRequest instance
//     console.log('%c ----------------------', 'color:green;');
//     postReq.open("POST", "/json-handler");
//     postReq.setRequestHeader("Content-Type", "application/json");
//     postReq.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
//     console.log(postReq.response, 'THE RESPONSE');
//
//     (async () => {
//       const res = await fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({foundOnURL: , b: 'Textual content'})
//       });
//       const content = await rawResponse.json();
//
//       console.log(content);
//     })();
//   }
// })
//
//
// // const doggy = fetch('http://localhost:3000/')
// //   .then(function(response) {
// //     return response.json();
// //   })
// //   .catch()
// // console.log(`%c ${doggy}`, 'color: blue;');
