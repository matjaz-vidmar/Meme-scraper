import cheerio from 'cheerio';
import domtoimage from 'dom-to-image';
import fs from 'fs';
import fetch from 'node-fetch';
import nodeHtmlToImage from 'node-html-to-image';

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

const firstTenSources = sources.slice(0, 10);

function toBuffer(firstTenSources) {
  const buf = Buffer.alloc(firstTenSources.byteLength);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}

// let blobbb = new Blob([firstTenSources], { type: 'text/html' });
// const blobBlob = Blob(firstTenSources);
// const buffer = Buffer.from(blobBlob, 'base64');
const contents = fs.readFile(firstTenSources, (err, data) => {
  if (err) throw err;
  console.log(data);
});
