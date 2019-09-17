const tempId = 'asdfasdfasdfasdfasdfasdfasdf'
chrome.storage.local.set({currentDropDownId: tempId}, () => {
  console.log('session ID saved');
})

chrome.runtime.onMessage.addListener(function(message, sendResponse) {
  // make a GET request for the current session
  if(message.type == 'getCurrentKey') {
    async () => {
      const sessionId = await chrome.storage.local.get(['currentDropDownId'])

      const getCurrentKey = async () => {
        const getKey = await fetch('http://localhost:3000/session/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: sessionId})
        });
        const keyFound = await getKey.JSON()
        sendResponse(keyFound)
      }
    }
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
