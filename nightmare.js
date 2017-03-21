const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto(`https://genius.com/Kendrick-lamar-alright-lyrics`)
  .evaluate(function () {
    return document.querySelector('div.lyrics').innerText;
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
