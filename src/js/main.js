'use strict';

// OBJECTS / LISTS / CONSTANTS

// ***kittenData_1.name.toUpperCase();
// ***const KittenName2UC = KittenName2.toUpperCase();
// ***const KittenName3UC = KittenName3.toUpperCase();

//Kitten info 1
const kittenData_1 = {
  img: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'anastacio',
  desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

//Kitten info 2
const kittenData_2 = {
  img: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'fiona',
  desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: '',
};

//Kitten info 3
const kittenData_3 = {
  img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'cielo',
  desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

const kittenDataList = ['kittenData_1', 'kittenData_2', 'kittenData_3'];

//Empty race (disabled)
// let KittenNewRace1 = '';
// let KittenNewRace2 = '';
// let KittenNewRace3 = '';

//Kitten LI elements
const Kitten1 =
  //   '<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!</p></article></li>';
  `<li class="card"><article><img class="card_img" src="${
    kittenData_1.img
  }" alt="gatito" /><h3 class="card_title">${
    kittenData_1.name
  }</h3>${renderRace(kittenData_1.race)}<p class="card_description">${
    kittenData_1.desc
  }</p></article></li>`;

const Kitten2 =
  // '<li class="card"><img class="card_img"src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /><h3 class="card_title">Fiona</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
  `<li class="card"><article><img class="card_img" src="${
    kittenData_2.img
  }" alt="gatito" /><h3 class="card_title">${
    kittenData_2.name
  }</h3>${renderRace(kittenData_2.race)}<p class="card_description">${
    kittenData_2.desc
  }</p></article></li>`;

const Kitten3 =
  // '<li class="card"><img class="card_img"src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito" /><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
  `<li class="card"><img class="card_img" src="${
    kittenData_3.img
  }" alt="gatito" /><h3 class="card_title">${
    kittenData_3.name
  }</h3><h4 class="card_race">${renderRace(
    kittenData_3.race
  )}</h4><p class="card_description">${kittenData_3.desc}</p></li>`;

//QUERY SELECTORS / HTML DOM ELEMENTS

//List
const NewKitten = document.querySelector('.js-list');

//Search
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const inputSearchRace = document.querySelector('.js_in_search_race');
const searchButton = document.querySelector('.js_in_search_button');
const labelMessageSearchError = document.querySelector(
  '.js_label_in_search_error'
);
const descSearchValue = inputSearchDesc.value; //values cogidos del html directo, no del evento input
const raceSearchValue = inputSearchRace.value; //values cogidos del html directo, no del evento input

//Form
const headerIcon = document.querySelector('.js-icon');
const NewKittenForm = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const addBtn = document.querySelector('.js-btn-add');
const cancelBtn = document.querySelector('.js-cancel-button');
const labelMessageError = document.querySelector('.js-label-error');

//FUNCTIONS

//FUNCTION - Show / Hide kitten Form
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

//FUNCTION - Include new kitten through form
//(be careful with the order in the parameters)
function renderKitten(kittenData) {
  return `<li class="card"><img class="card_img" src="${
    kittenData.img
  }" alt="gatito" /><h3 class="card_title">${
    kittenData.name
  }.name</h3><h4 class="card_race">${renderRace(
    kittenData.race
  )}</h4><p class="card_description">${kittenData.desc}.desc</p></li>`;
}
//No sabemos como acceder a las propiedades de el objeto que pasamos como parámetro para imprimirlo cuando invoquemos la función "renderkitten". Nos da error y dice que no puede acceder a las propiedades de un elemento undefined, pero es un parametro y por supuesto estará undefined.

// FUNCTION - Cancel New Kitten
function cancelNewKitten(event) {
  event.preventDefault();
  let emptyInput = document.querySelector('.label_new_kitten');
  emptyInput.value = '';

  //const emptyInput = document.querySelectorAll('.label_new_kitten'); // Otra posibilidad con arrays y bucles para limpiar los inputs
  //for (i = 0; i < emptyInput.length; i++) {
  // emptyInput[i].value = ' ';
  //}
  NewKittenForm.classList.add('collapsed');
}

//FUNCTION - Search Kittens by info (SEARCH)
function filterKitten() {
  let kittenList = '';

  if (kittenData_1.desc.includes(descSearchValue)) {
    kittenList = Kitten1;
  }

  if (kittenData_2.desc.includes(descSearchValue)) {
    kittenList += Kitten2;
  }

  if (kittenData_3.desc.includes(descSearchValue)) {
    kittenList += Kitten3;
  }

  NewKitten.innerHTML = kittenList;
}

//Problemas con filterkitten

//FUNCTION - Empty filter (SEARCH)
function emptyFilter() {
  labelMessageSearchError.innerHTML = 'Debe rellenar todos los valores';
}

//FUNCTION - Race not specified (SEARCH)
function renderRace(kittenRace) {
  // console.log("Estoy aquí");
  if (kittenRace === '') {
    // console.log("Sigo aquí");
    return '<p class="card_race">No se ha especificado la raza</p>';
  } else {
    // console.log("Holi");
    return `<h3 class="card_race">${kittenRace}</h3>`;
  }
}

// FUNCTION - Kitten List
function renderKittenList(KittenArray) {
  NewKitten.innerHTML = '';
  let i = 0;
  for (i = 0; i <= KittenArray.length; i++) {
    NewKitten.innerHTML += renderKitten(KittenArray[i]);
  }
}

renderKittenList(kittenDataList);

//EVENTS

//EVENT - Search info (SEARCH)
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (descSearchValue === '' && raceSearchValue === '') {
    emptyFilter();
  } else if (descSearchValue !== '' && raceSearchValue === '') {
    filterKitten();
  } else {
    filterKitten();
  }
});

//EVENT - Show / Hide New Kitten form (FORM)
headerIcon.addEventListener('click', handleClickNewCatForm);

//EVENT - Add New Kitten (FORM)
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let valuePhoto = inputPhoto.value;
  let valueName = inputName.value;
  let valueDesc = inputDesc.value;
  let valueRace = inputRace.value;

  const addedKitten = {
    img: valuePhoto,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };

  if (
    addedKitten.desc === '' ||
    addedKitten.img === '' ||
    addedKitten.name === ''
  ) {
    labelMessageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    NewKitten.innerHTML += renderKitten(addedKitten);
  }
});

// EVENT - Cancel new kitten (FORM)
cancelBtn.addEventListener('click', cancelNewKitten);
