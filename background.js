
chrome.runtime.onMessage.addListener(function(message) {
  if(message.type == "sending") {
    alert(message.message);
  }
  if(message.type == "sent") {
    alert(message.message);
  }
})



// CONTEXT MENU BUILD
// const dropdownCM = {
  //   'id': 'dropdown',
  //   'title': 'Drop to phone',
  //   'contexts': ['image']
  // }
  //
  // chrome.contextMenus.create(dropdownCM)
  //
  // chrome.contextMenus.onClicked.addListener((clickData) => {
    //   alert('hi')
    // })
