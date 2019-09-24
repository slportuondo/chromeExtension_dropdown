chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('received a message with type: ' + message.type + ' from sender ' + sender);
  evaluateMessage(message)
})

// Send current session information to popup.js script
function sendToPopup(sessionInfo) {
  console.log(sessionInfo);
  chrome.runtime.sendMessage({
    type: 'sessionInfo',
    sessionName: sessionInfo.sessionName,
    sessionKey: sessionInfo.sessionKey
    }, (response) => { console.log(response) }
  )
}

async function evaluateMessage (message) {
  if (message.type == 'toDrop') {
    await dropImage(message)
  } else if (message.type == 'newSession') {
    await createSession(message)
  } else if (message.type == 'getCurrentKey') {
    await getCurrentKey(message)
  }
}

async function dropImage (message) {
  chrome.storage.local.get(['currentDropDownId'], function(response) {
    makeRequest(response.currentDropDownId)
  })
  function makeRequest(sessionId){
    console.log('sessionID before fetch', sessionId);
    fetch('http://localhost:3000/drop/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({srcURL: message.srcURL, sessionId: sessionId})
    })
    .then(
      (res) => console.log('AFTER FETCH', res)
    )
  }
}

async function getCurrentKey(message) {
  chrome.storage.local.get(['currentDropDownId'], function(response) {
    makeRequest(response.currentDropDownId)
  })
  function makeRequest (sessionId) {
    fetch('http://localhost:3000/session/key', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ currentSessionId: sessionId })
    })
    .then(async (keyFound) => {
      const sessionInfo = keyFound.json()
      return sessionInfo
    })
    .then((sessionInfo) => {
      sendToPopup(sessionInfo)
    })
  }
}

async function createSession (message) {
  chrome.storage.local.get(['currentDropDownId'], function(response) {
    makeRequest(response.currentDropDownId)
  })

  function makeRequest (sessionId) {
    fetch('http://localhost:3000/session/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sessionName: message.sessionName, currentSessionId: sessionId})
    })
    .then(async (res) => {
      const sessionCreated = await res.json()
      await chrome.storage.local.set({currentDropDownId: sessionCreated._id}, function() {
        console.log('new session id is stored!!');
        sendToPopup(sessionCreated)
      });
    })
  }
}
