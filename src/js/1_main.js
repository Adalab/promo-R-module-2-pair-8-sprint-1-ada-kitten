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

//Functions - Search Kittens by info (SEARCH)
function filterKittenOnlyDesc() {
  let list = '';
  const descValue = inputSearchDesc.value;

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
  const descValue = inputSearchDesc.value;
  const raceValue = inputSearchRace.value;
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
  if (kittenRace === '') {
    return '<p class="card_race">No se ha especificado la raza</p>';
  } else {
    return `<h3 class="card_race">${kittenRace}</h3>`;
  }
}

//Function - Render kitten object
//(be careful with the order of the parameters in the functions)

function renderKitten(kittenData) {
  return `<li class="card">
     <article>      <img
        class="card_img"
         src="${kittenData.img}"
         alt="gatito"
       />
       <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${renderRace(kittenData.race)}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
}

//Function - Render current kittens List
// function renderKittenList(KittenArray) {
//   KittenList.innerHTML = '';
//   let i = 0;
//   for (i = 0; i <= KittenArray.length; i++) {
//     KittenList.innerHTML += renderKitten(KittenArray[i]);
//   }
// }
//Otra forma de hacerlo
function renderKittenList(kittenDataList) {
  KittenList.innerHTML = '';
  for (const kittenObject in kittenDataList) {
    KittenList.innerHTML += renderKitten(kittenDataList[kittenObject]);
  }
}

//EVENTS

//Event - Filter kittens by search (SEARCH)
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const descValue = inputSearchDesc.value;
  const raceValue = inputSearchRace.value;
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
  let photoValue = photoInputForm.value;
  let nameValue = nameInputForm.value;
  let raceValue = raceInputForm.value;
  let descValue = descInputForm.value;

  const addedKitten = {
    img: photoValue,
    name: nameValue,
    race: raceValue,
    desc: descValue,
  };

  if (photoValue === '' || nameValue === '' || descValue === '') {
    errorMessageForm.innerHTML = 'Debe rellenar todos los valores';
  } else {
    KittenList.innerHTML += renderKitten(addedKitten);
  }
});

//Event - Cancel new kitten (FORM)
cancelBtn.addEventListener('click', cancelNewKitten);

//Mostrar listado gatitos
renderKittenList(kittenDataList);
