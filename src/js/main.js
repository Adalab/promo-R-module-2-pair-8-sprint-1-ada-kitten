'use strict';

// Constantes
const KittenImg1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const KittenName1 = 'anastacio';
const KittenName1UC = KittenName1.toUpperCase();
const KittenDesc1 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! cariñoso';
const KittenRace1 = 'British Shorthair';

const KittenImg2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const KittenName2 = 'fiona';
const KittenName2UC = KittenName2.toUpperCase();
const KittenDesc2 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const KittenRace2 = 'British Shorthair';

const KittenImg3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const KittenName3 = 'cielo';
const KittenName3UC = KittenName3.toUpperCase();
const KittenDesc3 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const KittenRace3 = 'British Shorthair';

// Calls
let NewKitten = document.querySelector('.js-list');
const NewKittenForm = document.querySelector('.js-new-form');
const input_search_desc = document.querySelector('.js_in_search_desc');

// Actions
NewKittenForm.classList.remove('collapsed');
input_search_desc.setAttribute('value', 'cariñoso');
const descrSearchText = input_search_desc.value;
// input_search_desc.value = 'cariñoso';
// const descrSearchText = input_search_desc.value;

// if (kittenDesc2.includes(descrSearchText)) {
//   //Completa el código
// }

// if (kittenDesc3.includes(descrSearchText)) {
//   //Completa el código
// }

const Kitten1 =
  //   '<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!</p></article></li>';
  `<li class="card"><article><img class="card_img" src="${KittenImg1}" alt="gatito" /><h3 class="card_title">${KittenName1UC}</h3><h4 class="card_race">${KittenRace1}</h4><p class="card_description">${KittenDesc1}</p></article></li>`;
const Kitten2 =
  // '<li class="card"><img class="card_img"src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /><h3 class="card_title">Fiona</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
  `<li class="card"><article><img class="card_img" src="${KittenImg2}" alt="gatito" /><h3 class="card_title">${KittenName2UC}</h3><h4 class="card_race">${KittenRace2}</h4><p class="card_description">${KittenDesc2}</p></article></li>`;
const Kitten3 =
  // '<li class="card"><img class="card_img"src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito" /><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
  `<li class="card"><img class="card_img" src="${KittenImg3}" alt="gatito" /><h3 class="card_title">${KittenName3UC}</h3><h4 class="card_race">${KittenRace3}</h4><p class="card_description">${KittenDesc3}</p></li>`;

const kittens = document.getElementsByClassName('card_description');

if (KittenDesc1.includes(descrSearchText)) {
  kittens.classList.add('hidden');
}

NewKitten.innerHTML = Kitten1 + Kitten2 + Kitten3;
