// chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
//     alert(response)
// });

const dropdownCM = {
  'id': 'dropdown',
  'title': 'Drop to phone',
  'contexts': ['image']
}

chrome.contextMenus.create(dropdownCM)

let pageSrc;
let photoSrcUrl;

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId == 'dropdown' ) {
    photoSrcToDrop = clickData.srcUrl
  }
})
