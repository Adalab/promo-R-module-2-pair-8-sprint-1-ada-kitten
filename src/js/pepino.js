// 'use strict';
// const plusIcon = getEl('.js-plus-icon'),
//   hideNewFormArea = getEl('.js-hide-form-area'),
//   pepinoListElement = getEl('.js-pepino-list'),
//   newFormElement = getEl('.js-new-form'),
//   inputImgElement = getEl('.js-pepino-img'),
//   inputNameElement = getEl('.js-pepino-name'),
//   inputDescElement = getEl('.js-pepino-desc'),
//   labelErrorElement = getEl('.js-new-form-error'),
//   addButton = getEl('.js-button-add'),
//   cancelButton = getEl('.js-button-cancel'),
//   searchFormElement = getEl('.js-search-form'),
//   inputSearchNameElement = getEl('.js-search-input-name'),
//   inputSearchDescElement = getEl('.js-search-input-desc'),
//   labelSearchErrorElement = getEl('.js-search-form-error'),
//   searchButton = getEl('.js-search-button'),
//   pepino1 = getPepino(
//     './assets/images/pepino-clasico.jpg',
//     'Pepino clásico',
//     'El que te encuentras en el Mercadona.'
//   ),
//   pepino2 = getPepino(
//     './assets/images/alficoz.jpg',
//     'Alficoz',
//     'Va palante como los de Alicante.'
//   ),
//   pepino3 = getPepino(
//     './assets/images/pepino-mar.jpg',
//     'Pepino de mar',
//     'La foto está borrosa porque son muy feos.'
//   ),
//   pepino4 = getPepino(
//     './assets/images/benedict-cucumberbatch.jpg',
//     'Benedict Cucumberbatch',
//     'An English pepino indeed.'
//   ),
//   allPepinos = [pepino1, pepino2, pepino3, pepino4];
// function getEl(e) {
//   let n = {};
//   return (
//     document.querySelector(e)
//       ? (n = document.querySelector(e))
//       : console.log(
//           'No existe ningún elemento con clase, id o tag llamado ' + e
//         ),
//     n
//   );
// }
// function getPepino(e, n, t) {
//   return {
//     imgSrc: e,
//     name: n,
//     desc: t,
//     renderPepinoItem: function () {
//       return `<li class="card">\n            <article>\n              <img class="card_img" src=${this.imgSrc} alt=${this.name} />\n              <h3 class="card_title">${this.name}</h3>\n              <p class="card_description">\n              ${this.desc}\n              </p>\n            </article>\n          </li>`;
//     },
//   };
// }
// function addNewPepino(e, n, t) {
//   allPepinos[allPepinos.length] = getPepino(e, n, t);
// }
// function renderPepinos(e) {
//   (pepinoListElement.innerHTML = ''),
//     e.forEach((e) => {
//       pepinoListElement.innerHTML += e.renderPepinoItem();
//     });
// }
// function cleanNewForm() {
//   (labelErrorElement.innerHTML = ''),
//     (inputImgElement.value = ''),
//     (inputNameElement.value = ''),
//     (inputDescElement.value = '');
// }
// function cleanSearchForm() {
//   searchFormElement.reset();
// }
// function plusIconClickHandler() {
//   newFormElement.classList.toggle('collapsed'),
//     (labelSearchErrorElement.innerHTML = '');
// }
// function hideNewFormAreaClickHandler() {
//   newFormElement.classList.contains('collapsed') ||
//     newFormElement.classList.add('collapsed');
// }
// function addButtonClickHandler(e) {
//   e.preventDefault();
//   const n = inputImgElement.value,
//     t = inputNameElement.value,
//     l = inputDescElement.value;
//   '' === n || '' === t || '' === l
//     ? (labelErrorElement.innerHTML = 'Porfa, rellena todos los campos')
//     : ((labelErrorElement.innerHTML = ''),
//       addNewPepino(n, t, l),
//       renderPepinos(allPepinos),
//       cleanNewForm(),
//       newFormElement.classList.add('collapsed'));
// }
// function cancelButtonClickHandler(e) {
//   e.preventDefault(), cleanNewForm(), newFormElement.classList.add('collapsed');
// }
// function searchByTwoParams(e, n, t) {
//   const l = [];
//   let o = 0;
//   return (
//     t.forEach((t) => {
//       const a = t.name.toLowerCase(),
//         r = t.desc.toLowerCase();
//       a.includes(e) && r.includes(n) && ((l[o] = t), o++);
//     }),
//     l
//   );
// }
// function searchByName(e, n) {
//   const t = [];
//   let l = 0;
//   return (
//     n.forEach((n) => {
//       n.name.toLowerCase().includes(e) && ((t[l] = n), l++);
//     }),
//     t
//   );
// }
// function searchByDesc(e, n) {
//   const t = [];
//   let l = 0;
//   return (
//     n.forEach((n) => {
//       n.desc.toLowerCase().includes(e) && ((t[l] = n), l++);
//     }),
//     t
//   );
// }
// function searchButtonClickHandler(e) {
//   {
//     e.preventDefault();
//     const n = inputSearchNameElement.value.toLowerCase(),
//       t = inputSearchDescElement.value.toLowerCase();
//     labelSearchErrorElement.innerHTML = '';
//     let l = [];
//     n && t
//       ? ((l = searchByTwoParams(n, t, allPepinos)), renderPepinos(l))
//       : n && !t
//       ? ((l = searchByName(n, allPepinos)), renderPepinos(l))
//       : !n && t
//       ? ((l = searchByDesc(t, allPepinos)), renderPepinos(l))
//       : ((labelSearchErrorElement.innerHTML = 'Rellena alguno de los campos'),
//         renderPepinos(allPepinos));
//   }
// }
// renderPepinos(allPepinos),
//   plusIcon.addEventListener('click', plusIconClickHandler),
//   hideNewFormArea.addEventListener('click', hideNewFormAreaClickHandler),
//   addButton.addEventListener('click', (e) => addButtonClickHandler(e)),
//   cancelButton.addEventListener('click', (e) => cancelButtonClickHandler(e)),
//   searchButton.addEventListener('click', (e) => searchButtonClickHandler(e));
