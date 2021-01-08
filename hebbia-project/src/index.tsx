import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './reset.min.css';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import * as cheerio from 'cheerio';

const origin = "https://tranquil-basin-83401.herokuapp.com/"
const curr = "https://en.wikipedia.org/wiki/Natural_language_processing"
const url = origin.concat(curr.toString())
// // const AxiosInstance = axios.create();
// // const cheerio = require("cheerio")

fetch(url)
.then(res => {
    return res.text();
})
.then(data => {
  const $ = cheerio.load(data);
  const content = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
  const all = $('.firstHeading');
  console.log(all.text())
  console.log(content.text());
})

// const options = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8'
//   },
//   body: JSON.stringify({
//     a: 10,
//     b: 20
//   })
// };
// fetch(url, options)
//   .then(response => {
//     console.log(response);
//   });

// fetch(url, options)
//   .then((response) => response.json)
//   .then(function(data) {
    
//     console.log(JSON.stringify(data));
//     const $ = cheerio.load(data);
//     const content = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
//     console.log(content.text());
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// AxiosInstance.get(url)
//   .then(
//     response => {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const content = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
//       console.log(content.text());
//       // the goal now is to get specific elements of content and extract text
//     }
//   )
//   .catch(console.error);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
