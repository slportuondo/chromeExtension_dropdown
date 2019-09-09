let imageTags = document.getElementsByTagName("img")

[...imageTags].forEach(function(tag){
  tag.addEventListener('dragstart', () => {
    console.log('%c ITS WORKING', 'color: blue;');
  }, true)
})


// chrome.runtime.sendMessage(document.getElementsByTagName('img')[0].innerText)
