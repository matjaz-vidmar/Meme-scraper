import cheerio from 'cheerio';
// import { first } from 'cheerio/lib/api/traversing';
// import domtoimage from 'dom-to-image';
import fs from 'fs';
// import iconvlite from 'iconv-lite';
import fetch from 'node-fetch';

// import nodeHtmlToImage from 'node-html-to-image';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const $ = cheerio.load(body);
let div = $('section > div');

let sources = [];
div.each(function () {
  sources.push($(this).find('img').attr('src'));
});

let firstTenArray = sources.splice(0, 10);

const response2 = await fetch(firstTenArray);
const picture = await response2.text();

// let writtenFile = fs.writeFile('./memes/01.jpg', picture);

// console.log(picture);

// const sourcesBuffer = Buffer.from(firstTenSources);

let stream = fs.createWriteStream(picture);

stream.once(picture, () => {
  stream.write('01.jpg\n');
  stream.write('02.jpg\n');
  stream.write('03.jpg\n');
  stream.write('04.jpg\n');
  stream.write('05.jpg\n');
  stream.write('06.jpg\n');
  stream.write('07.jpg\n');
  stream.write('08.jpg\n');
  stream.write('09.jpg\n');
  stream.write('10.jpg\n');

  // Important to close the stream when you're ready
  stream.end();
});

// console.log(stream);

// const contents = fs.readFile(firstTenSources, (err, data) => {
// if (err) throw err;
// console.log(data);
// });
