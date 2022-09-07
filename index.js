import domtoimage from 'dom-to-image';
import fetch from 'node-fetch';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const images = await response.text();
const imagesArray = images.split('.jpg');
// console.log(images);
// console.log(imagesArray);

const firstTenArray = [
  'https://memecomplete.com/edit/https://api.memegen.link/images/ch/if_you_wanted_to_avoid_the_friend_zone/you_should_have_made_your_intentions_known_from_the_start.jpg',
  'https://api.memegen.link/images/ch/if_you_wanted_to_avoid_the_friend_zone/you_should_have_made_your_intentions_known_from_the_start.jpg?width=300',
  'https://memecomplete.com/edit/https://api.memegen.link/images/sparta/this._is./sparta!.jpg',
  'https://api.memegen.link/images/sparta/this._is./sparta!.jpg?width=300',
  'https://memecomplete.com/edit/https://api.memegen.link/images/sb/remembers_the_face/but_not_the_name.jpg',
  'https://api.memegen.link/images/sb/remembers_the_face/but_not_the_name.jpg?width=300',
  'https://memecomplete.com/edit/https://api.memegen.link/images/disastergirl/what_did_you_say~q.jpg',
  'https://api.memegen.link/images/disastergirl/what_did_you_say~q.jpg?width=300',
  'https://memecomplete.com/edit/https://api.memegen.link/images/jd/disregard_females/acquire_currency.jpg',
  'https://api.memegen.link/images/jd/disregard_females/acquire_currency.jpg?width=300',
  'https://memecomplete.com/edit/https://api.memegen.link/images/yuno/y_u_no/use_this_meme!~q.jpg',
];
// console.log(firstTenArray);
// const pics = domtoimage.toPng(firstTenArray);
// console.log(pics);
