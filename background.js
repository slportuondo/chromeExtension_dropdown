chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
  // if the type property of the message object is newSession, send the new session name to express and wait for a random session key to be returned
  if (message.type == 'newSession') {
    const createSession = await fetch('http://localhost:3000/session/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sessionName: message.message})
    })
    const sessionCreated = await createSession.json()
    console.log(sessionCreated, 'THIS WAS THE SESSION THAT WAS CREATED');
    chrome.storage.local.set({currentDropDownId: sessionCreated._id})
    sendResponse({response: createSession})
    // must return true for sendResponse to function asyncronously
    return true
/*-------------------------------------------------------------------------------*/
  } else if (message.type == 'getCurrentKey') {
    // make a GET request for the current session information
    const sessionId = await chrome.storage.local.get(['currentDropDownId'])
    const getKey = await fetch('http://localhost:3000/session/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: sessionId})
    })
    const keyFound = await getKey.json()
    sendResponse(keyFound)
    return true
  }
})
