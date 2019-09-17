document.getElementById('currentKey').addEventListener('click', function(e) {
  if (e == 1) {
    // Request current key
    async () => {
      const returnedKey = await chrome.runtime.sendMessage({type: 'getCurrentKey'});
    }
  }
});







// const newSession = (id) => {
//
// }
