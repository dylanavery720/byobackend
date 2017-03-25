const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const nightmare2 = Nightmare({ show: true });


const minify = (result) => {
  setTimeout(() => {
      nightmare2.goto('http://www.willpeavy.com/minifier/')
           .insert('#html', result)
           .wait(2000)
           .click('button')
           .wait(2000)
           .evaluate(function () {
             return document.querySelector('#html').innerHTML;
           })
           .end()
           .then(function (result) {
             console.log(result)
           })
           .catch(function (error) {
             console.error('Search failed:', error);
           });
         }, 2000)
}

nightmare
  .goto(`https://genius.com/Bhagavad-gita-chapter-11-annotated`)
  .evaluate(function () {
    return document.querySelector('div.lyrics').innerText;
  })
  .end()
  .then(function (result) {
    minify(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
