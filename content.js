
const sendImage = async (srcURL, foundOnURL) => {
  await chrome.runtime.sendMessage({ type: 'toDrop', srcURL: srcURL, foundOnURL: foundOnURL }, (response) => {
    console.log(response, 'response');
  })
}

// add event listeners to each image on the page --> temporary fix to get around chrome security setbacks
let imageTags = document.getElementsByTagName('img');

[...imageTags].forEach((tag) => {
  const srcURL = tag.getAttribute('src');
  const foundOnURL = window.location.href;
  tag.addEventListener('dragstart', () => {
    sendImage(srcURL, foundOnURL)
  }, true)
})
