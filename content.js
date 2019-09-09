let imageTags = document.getElementsByTagName('img');


[...imageTags].forEach(function(tag){
  tag.addEventListener('dragstart', async (e) => {
    const photoSrcToDrop = tag.getAttribute('src')
    const foundOnURL = location.href;

    (async () => {
      console.log('about to make post request');
      const res = await fetch('http://localhost:3000/drop/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({srcUrl: photoSrcToDrop, foundOnURL: foundOnURL})
      });
      console.log('after post request')
      const content = await res.json()
      console.log(content)
    })()
  }, true)
})
