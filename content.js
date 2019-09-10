// add event listeners to each image on the page --> temporary fix to get around chrome security setbacks
let imageTags = document.getElementsByTagName('img');

[...imageTags].forEach(function(tag){
  tag.addEventListener('dragstart', async (e) => {
    const srcURL = tag.getAttribute('src');
    const foundOnURL = window.location.href;

    // drop the image (in the form of it's src attribute and the location it was found) to the express server
    (async () => {
      const successfulDrop = await fetch('http://localhost:3000/drop/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({srcURL: srcURL, foundOnURL: foundOnURL})
      });

      console.log(successfulDrop);
    })()
  }, true)
})
