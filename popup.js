chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type == 'sessionInfo') {
    modifyPopup(message)
  }
})

function modifyPopup(sessionInfo) {
  document.getElementById('dropdownSessionName').innerText=sessionInfo.sessionName
  document.getElementById('dropdownSessionKey').innerText=sessionInfo.sessionKey
}
// Listener placed on the dropdown menu buttons to pass form input to the popup.js script
// because fetch requests cannot be made from the html form
document.getElementById('dropdownButtons').addEventListener('click', async (e) => {

  const clicked = e.target.id

  //new session button was clicked
  if ('newSessionButton' == clicked) {
    const userInput = await document.getElementById('newSessionNameInput')
    const newSessionName = userInput.value
    userInput.value = ''

    // const newSessionResponse = sendMessage('newSession', newSessionName);
    const newSessionResponse = await chrome.runtime.sendMessage({type: 'newSession', sessionName: newSessionName}, (response) => {
      console.log(response);
    })

    const newSession = JSON.parse(newSessionResponse)

    document.getElementById('dropdownSessionName').innerText = newSession.sessionName
    document.getElementById('dropdownSessionKey').innerText = newSession.sessionKey

  } else if ('sessionInfo' == clicked) {
    // Request current key
    const returnedKey = await chrome.runtime.sendMessage({type:'getCurrentKey'}, (response) => {
      console.log(response);
    })
  }
});
