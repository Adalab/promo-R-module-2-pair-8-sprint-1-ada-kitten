'use strict';

// Constants and Variables / called HTML elements

// kittenData_1.name.toUpperCase();
// const KittenName2UC = KittenName2.toUpperCase();
// const KittenName3UC = KittenName3.toUpperCase();
//KITTEN 1 INFO

const kittenData_1 = {
  img: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'anastacio',
  desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

//KITTEN 2 INFO
const kittenData_2 = {
  img: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'fiona',
  desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: '',
};

//KITTEN 3 INFO
const kittenData_3 = {
  img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'cielo',
  desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

const kittenDataList = ['kittenData_1', 'kittenData_2', 'kittenData_3'];

//VARIABLES - EMPTY RACE FIELD (SEARCH FILTER)
// let KittenNewRace1 = '';
// let KittenNewRace2 = '';
// let KittenNewRace3 = '';
//KITTEN "LI" ELEMENTS
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

//QUERY SELECTORS
let NewKitten = document.querySelector('.js-list');
const NewKittenForm = document.querySelector('.js-new-form');
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const inputSearchRace = document.querySelector('.js_in_search_race');
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
const labelMessageError = document.querySelector('.js-label-error');
const cancelBtn = document.querySelector('.js-cancel-button');
const descSearchText = inputSearchDesc.value;
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

//FUNCTION - INCLUDE NEW KITTEN FORM
//be careful with the order in the parameters
function renderKitten(kittenData) {
  return `<li class="card"><img class="card_img" src="${
    kittenData.img
  }" alt="gatito" /><h3 class="card_title">${
    kittenData.name
  }</h3><h4 class="card_race">${renderRace(
    kittenData.race
  )}</h4><p class="card_description">${kittenData.desc}</p></li>`;
}
//Algo en render kitten no funcion y no nos deja imprimir los gatitos aunque la funcion creada para ello esté bien

// FUNCTION - CANCEL NEW KITTEN
function cancelNewKitten(event) {
  event.preventDefault();
  let emptyInput = document.querySelector('.label_new_kitten');
  emptyInput.value = '';
  NewKittenForm.classList.add('collapsed');
}

//FUNCTION - SEARCH KITTENS BY INFO (SEARCH)
function filterKitten() {
  if (KittenDesc1.includes(descSearchText)) {
    // console.log("Pinta kitten");
    NewKitten.innerHTML = Kitten1;
  }

  if (KittenDesc2.includes(descSearchText)) {
    NewKitten.innerHTML += Kitten2;
  }

  if (KittenDesc3.includes(descSearchText)) {
    NewKitten.innerHTML += Kitten3;
  }
}

//FUNCTION - EMPTY FILTER (SEARCH)
function emptyFilter() {
  labelMessageSearchError.innerHTML = 'Debe rellenar todos los valores';
}
//FUNCTION - RACE NOT SPECIFIED (SEARCH)
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

// FUNCTION - KITTEN LIST
/*function renderKittenList(kittenDataList) {
  //Vaciamos el innerHTML del <ul> de la página.
  //Iteramos sobre el listado de gatitos
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)
}*/
let i = 0;

function renderKittenList(KittenArray) {
  NewKitten.innerHTML = '';
  for (i = 0; i <= KittenArray.length; i++) {
    NewKitten.innerHTML += renderKitten(KittenArray[i]);
  }
}

renderKittenList(kittenDataList);

//Events

//EVENT - SEARCH SPECIFIC KITTEN INFO AND EMPTY FILTER (SEARCH)
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const raceSearchText = inputSearchRace.value;
  if (descSearchText === '' && raceSearchText === '') {
    emptyFilter();
  } else if (descSearchText !== '' && raceSearchText === '') {
    filterKitten();
  } else {
    filterKitten();
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

  const addedKitten = {
    desc: valueDesc,
    img: valuePhoto,
    name: valueName,
    race: valueRace,
  };
  // console.log(valueDesc);
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

// EVENT - CANCEL NEW KITTEN (NEW KITTEN FORM)
cancelBtn.addEventListener('click', cancelNewKitten);
