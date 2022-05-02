import React from 'react';
import './App.css';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

// import Tesseract from 'tesseract.js';
//
// const tessEx = 'https://hare-media-cdn.tripadvisor.com/media/photo-m/1280/14/fd/bf/f8/bar.jpg';
// Tesseract.recognize(
//   tessEx,
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log('text:');
//   console.log(text);
// });

const testParams = 'w/17/5b/ef/9a/liming.jpg&p/1d/89/95/ce/caption.jpg';
const testParamsEncoded = 'dy8xNy81Yi9lZi85YS9saW1pbmcuanBn&cC8xZC84OS85NS9jZS9jYXB0aW9uLmpwZw==';
const testImages = [
  'w/17/5b/ef/9a/liming.jpg',
  'p/1d/89/95/ce/caption.jpg',
];

// From https://stackoverflow.com/questions/8486099
function getJsonFromUrl(url) {
  if (!url) {
    // eslint-disable-next-line no-restricted-globals
    url = location.search;
  }
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

const App = () => {
  const isOpen = true;

  const queryParams = getJsonFromUrl();

  const images = Object.keys(queryParams);
  const items = images.map(imageSrc => (
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-' + atob(imageSrc),
      w: 2000,
      h: 2000,
    }
  ));

  const options = {
    //http://photoswipe.com/documentation/options.html
    history: false,
  };

  const handleClose = () => {
    // eslint-disable-next-line no-restricted-globals
    window.close();
  };

  return (
    <PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose} />
  );
};

export default App;
