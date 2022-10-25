'use strict';

// Constants and Variables / called HTML elements

//KITTEN 1 INFO
const KittenImg1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const KittenName1 = 'anastacio';
const KittenName1UC = KittenName1.toUpperCase();
const KittenDesc1 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const KittenRace1 = 'British Shorthair';
//KITTEN 2 INFO
const KittenImg2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const KittenName2 = 'fiona';
const KittenName2UC = KittenName2.toUpperCase();
const KittenDesc2 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const KittenRace2 = '';
//KITTEN 3 INFO
const KittenImg3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const KittenName3 = 'cielo';
const KittenName3UC = KittenName3.toUpperCase();
const KittenDesc3 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const KittenRace3 = 'Siames';
//VARIABLES - EMPTY RACE FIELD (SEARCH FILTER)
let KittenNewRace1 = '';
let KittenNewRace2 = '';
let KittenNewRace3 = '';
//KITTEN "LI" ELEMENTS
const Kitten1 =
  //   '<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!</p></article></li>';
  `<li class="card"><article><img class="card_img" src="${KittenImg1}" alt="gatito" /><h3 class="card_title">${KittenName1UC}</h3><h4 class="card_race">${KittenNewRace1}</h4><p class="card_description">${KittenDesc1}</p></article></li>`;
const Kitten2 =
  // '<li class="card"><img class="card_img"src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /><h3 class="card_title">Fiona</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
  `<li class="card"><article><img class="card_img" src="${KittenImg2}" alt="gatito" /><h3 class="card_title">${KittenName2UC}</h3><h4 class="card_race">${KittenNewRace2}</h4><p class="card_description">${KittenDesc2}</p></article></li>`;
const Kitten3 =
  // '<li class="card"><img class="card_img"src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito" /><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
  `<li class="card"><img class="card_img" src="${KittenImg3}" alt="gatito" /><h3 class="card_title">${KittenName3UC}</h3><h4 class="card_race">${KittenNewRace3}</h4><p class="card_description">${KittenDesc3}</p></li>`;
//QUERY SELECTORS
let NewKitten = document.querySelector('.js-list');
const NewKittenForm = document.querySelector('.js-new-form');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const labelMessageSearchError = document.querySelector(
  '.js_label_in_search_error'
);
const searchButton = document.querySelector('.js_in_search_button');
const headerIcon = document.querySelector('.js-icon');
const addBtn = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMesageError = document.querySelector('.js-label-error');
const cancelbtn = document.querySelector('.js-cancel-button');

//Functions

//FUNCTION - SHOW / HIDE "NEW KITTEN" FORM
function showNewCatForm() {
  NewKittenForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  NewKittenForm.classList.add('collapsed');
}
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (NewKittenForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

//FUNCTION - INCLUDE NEW KITTEN
//be careful with the order in the parameters
function renderKitten(url, desc, name, race) {
  return `<li class="card"><img class="card_img" src="${url}" alt="gatito" /><h3 class="card_title">${name}</h3><h4 class="card_race">${race}</h4><p class="card_description">${desc}</p></li>`;
}

//Events

//EVENT - RACE NOT SPECIFIED (SEARCH)
if (KittenRace1 === '') {
  KittenNewRace1 = 'No se ha especificado la raza';
} else {
  KittenNewRace1 = KittenRace1;
}

if (KittenRace2 === '') {
  KittenNewRace2 = 'No se ha especificado la raza';
} else {
  KittenNewRace2 = KittenRace2;
}

if (KittenRace3 === '') {
  KittenNewRace3 = 'No se ha especificado la raza';
} else {
  KittenNewRace3 = KittenRace3;
}

//EVENT - SEARCH SPECIFIC KITTEN INFO (SEARCH)
input_search_desc.value = 'juguetón';
const descrSearchText = input_search_desc.value;

if (KittenDesc1.includes(descrSearchText)) {
  NewKitten.innerHTML = Kitten1;
}

if (KittenDesc2.includes(descrSearchText)) {
  NewKitten.innerHTML += Kitten2;
}

if (KittenDesc3.includes(descrSearchText)) {
  NewKitten.innerHTML += Kitten3;
}

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const valueSearchDesc = input_search_desc.value;
  const valueSearchRace = input_search_race.value;

  if (valueSearchDesc === '' || valueSearchRace === '') {
    labelMessageSearchError.innerHTML = 'Debe rellenar todos los valores';
  }
});

//EVENT SHOW / HIDE "NEW KITTEN" FORM (NEW KITTEN FORM)
headerIcon.addEventListener('click', handleClickNewCatForm);

//EVENT - ADD NEW KITTEN (NEW KITTEN FORM)
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let valueDesc = inputDesc.value;
  let valuePhoto = inputPhoto.value;
  let valueName = inputName.value;
  let valueRace = inputRace.value;
  console.log(valueDesc);
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    NewKitten.innerHTML += renderKitten(
      valuePhoto,
      valueDesc,
      valueName,
      valueRace
    );
  }
});

// EVENT - CANCEL NEW KITTEN (NEW KITTEN FORM)
cancelbtn.addEventListener('click', (event) => {
  event.preventDefault();
  let emptyInput = document.querySelector('.label_new_kitten');
  emptyInput.value = '';
  NewKittenForm.classList.add('collapsed');
});
