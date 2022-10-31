'use strict';

//FUNCTIONS

//Function - Show / Hide kitten Form (FORM)
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

//Function - get inputs values (FORM)
function getPhotoInputForm(event) {
  photoInputForm.addEventListener('input', (event) => {
    let photoValue = event.currentTarget.value;
    return photoValue;
  });
}

function getNameInputForm(event) {
  nameInputForm.addEventListener('input', (event) => {
    let nameValue = event.currentTarget.value;
    return nameValue;
  });
}

function getRaceInputForm(event) {
  raceInputForm.addEventListener('input', (event) => {
    let raceValue = event.currentTarget.value;
    return raceValue;
  });
}

function getDescInputForm(event) {
  descInputForm.addEventListener('input', (event) => {
    let descValue = event.currentTarget.value;
    return descValue;
  });
}

//Function - Cancel New Kitten (FORM)
function cancelNewKitten(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('.label_new_kitten');
  let i = 0;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  NewKittenForm.classList.add('collapsed');
}

//Functions - get input values (SEARCH)
function getDescInput(event) {
  inputSearchDesc.addEventListener('input', (event) => {
    let descValue = event.currentTarget.value;
    return descValue;
  });
}

function getRaceInput(event) {
  inputSearchRace.addEventListener('input', (event) => {
    let raceValue = event.currentTarget.value;
    return raceValue;
  });
}

//Functions - Search Kittens by info (SEARCH)
function filterKittenOnlyDesc() {
  let list = '';
  const descValue = getDescInput();

  if (kittenDataList[0].desc.includes(descValue)) {
    list = Kitten1;
  }

  if (kittenDataList[1].desc.includes(descValue)) {
    list += Kitten2;
  }

  if (kittenDataList[2].desc.includes(descValue)) {
    list += Kitten3;
  }

  KittenList.innerHTML = list;
}

function filterKittenBoth() {
  let list = '';
  const descValue = getDescInput();
  const raceValue = getRaceInput();
  if (
    kittenDataList[0].desc.includes(descValue) &&
    kittenDataList[0].desc.includes(raceValue)
  ) {
    list = Kitten1;
  }

  if (
    kittenDataList[1].desc.includes(descValue) &&
    kittenDataList[1].desc.includes(raceValue)
  ) {
    list += Kitten2;
  }

  if (
    kittenDataList[2].desc.includes(descValue) &&
    kittenDataList[2].desc.includes(raceValue)
  ) {
    list += Kitten3;
  }

  KittenList.innerHTML = list;
}

//Function - Empty filters (SEARCH)
function emptyFilter() {
  errorMessageSearch.innerHTML = 'Debe rellenar todos los valores, por favor';
}

//Function - Race not specified
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

//Function - Render kitten object
//(be careful with the order of the parameters in the functions)

function renderKitten(kittenData) {
  const kitten = `<li class="card">
     <article>      <img
        class="card_img"
         src=${kittenData.img}
         alt="gatito"
       />
       <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

function getNewKitten(imgValue, nameValue, raceValue, descValue) {
  const newKitten = {
    img: '',
    name: '',
    race: '',
    desc: '',
  };
  newKitten.img = imgValue;
  newKitten.name = nameValue;
  newKitten.race = raceValue;
  newKitten.desc = descValue;
  kittenDataList.push(newKitten);
}

//Está todo correcto. El único problema es que al pasar el objeto lo reconoce como tal, pero al intentar acceder a sus propiedades desde dentro de la función dice que las propiedades no existen y nos devuelve undefined. Por qué??

//Function - Render current kittens List
function renderKittenList(KittenArray) {
  KittenList.innerHTML = '';
  let i = 0;
  for (i = 0; i <= KittenArray.length; i++) {
    KittenList.innerHTML += renderKitten(KittenArray[i]);
  }
}

// function renderKittenList(kittenDataList) {
//   KittenList.innerHTML = '';
//   for (const kittenObject of kittenDataList) {
//   }
//   KittenList.innerHTML += renderKitten(kittenObject);
// }

//EVENTS

//Event - Filter kittens by search (SEARCH)
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const descValue = getDescInput();
  const raceValue = getDescInput();
  if (descValue === '' && raceValue === '') {
    emptyFilter();
  } else if (descValue !== '' && raceValue === '') {
    filterKittenOnlyDesc();
  } else if (descValue !== '' && raceValue !== '') {
    filterKittenBoth();
  }
});

//Event - Show / Hide New Kitten form (FORM)
headerIcon.addEventListener('click', handleClickNewCatForm);

//Event - Add New Kitten (FORM)
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let photoValue = getDescInputForm();
  let nameValue = getNameInputForm();
  let raceValue = getDescInputForm();
  let descValue = getDescInputForm();

  if (descValue === '' || photoValue === '' || nameValue === '') {
    errorMessageForm.innerHTML = 'Debe rellenar todos los valores';
  } else {
    getNewKitten(photoValue, nameValue, raceValue, descValue);
    renderKittenList(kittenDataList);
  }
});

//Event - Cancel new kitten (FORM)
cancelBtn.addEventListener('click', cancelNewKitten);

//Mostrar listado gatitos
renderKittenList(kittenDataList);
