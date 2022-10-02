import * as cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

// initial fetch
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const $ = cheerio.load(body);
let div = $('section > div');
// creating meme url array
let sources = [];
div.each(function () {
  sources.push($(this).find('img').attr('src'));
});
// first ten array
let firstTenArray = sources.splice(0, 10);
// creating a directory
fs.mkdir(path.join('memes'), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});
// loop for writing memes
for (let i = 0; i < firstTenArray.length; i++) {
  const getImage = await fetch(firstTenArray[i]);
  const arrayBuffer = await getImage.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFile(`./memes/0${i + 1}.jpg`, buffer, function () {});
}
