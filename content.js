// Content.js adds drag listeners to every img element on each page. When an image is dragged a post request with the image's information is dropped to the express server


// add event listeners to each image on the page --> temporary fix to get around chrome security setbacks
let imageTags = document.getElementsByTagName('img');

const sessionId = chrome.storage.local.get(['currentDropDownId']);

[...imageTags].forEach(function(tag) {
  tag.addEventListener('dragstart', async () => {
    const srcURL = tag.getAttribute('src');
    const foundOnURL = window.location.href;

    chrome.runtime.sendMessage({ type: 'sending', message: 'sending'});

    // drop the image (in the form of its src attribute and the location it was found) to the express server
    (async () => {
      const successfulDrop = await fetch('http://localhost:3000/drop/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({srcURL: srcURL, sessionId: sessionId})
      });
    })()
    // send the website the image was found on to the popup, indicating that it was sent
    chrome.runtime.sendMessage({type: 'sent', message: foundOnURL});
  }, true)
})
