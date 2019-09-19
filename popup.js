// function to send click data from popup to background.js --> fetch requests cannot be made from the popup script

const sendMessage = (type, message = null) => {
  chrome.runtime.sendMessage({type: type, message: message});
}

document.getElementById('dropdownButtons').addEventListener('click', async (e) => {
  const clicked = e.target.id
  if (clicked == 'newSessionButton') {
    const userInput = document.getElementById('newSessionNameInput')
    const newSessionName = userInput.value
    userInput.value = ''

    const returnedKey = await sendMessage('newSession', newSessionName);

  } else if (clicked == 'currentKeyButton') {
    // Request current key
    const returnedKey = await sendMessage('getCurrentKey')

  }
});
