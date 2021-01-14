const $entryPosition = document.querySelector('#journalEntry');
const $entryForm = document.querySelector('#entryForm');
const $entrySubmitBtn = document.querySelector('#entrySubmitBtn');

// main views
const $navigation = document.querySelector('#navigation');
const $welcome = document.querySelector('#welcome');
const $journalEntry = document.querySelector('#journalEntry');
const $formSuccess = document.querySelector('#formSuccess');
const $viewJournal = document.querySelector('#viewJournal');
// icon views
const $iconOne = document.querySelector('#iconOne');






// This Function Changes the View
function changeView(view) {
  switch(view) {
    case 'welcome':
    $navigation.classList.add('d-none');
    $welcome.classList.remove('d-none');
    $journalEntry.classList.add('d-none');
    $formSuccess.classList.add('d-none');
    $viewJournal.classList.add('d-none');
    break;
    case 'addJournal':
      $navigation.classList.remove('d-none');
      $welcome.classList.add('d-none');
      $journalEntry.classList.remove('d-none');
      $formSuccess.classList.add('d-none');
      $viewJournal.classList.add('d-none');
    break;
    case 'viewJournal':
      $navigation.classList.remove('d-none');
      $welcome.classList.add('d-none');
      $journalEntry.classList.add('d-none');
      $formSuccess.classList.add('d-none');
      $viewJournal.classList.remove('d-none');
    break;
    case 'successEntry':
      $navigation.classList.remove('d-none');
      $welcome.classList.add('d-none');
      $journalEntry.classList.add('d-none');
      $formSuccess.classList.remove('d-none');
      $viewJournal.classList.add('d-none');
  }
}




// Create DOM Entry Function
function createDom(object) {
  const main = document.createElement('div');
  main.setAttribute('class','bg-light m-2 mb-4');
  const mainCol = document.createElement('div');
  mainCol.setAttribute('class','col');
  main.appendChild(mainCol);
  const title = document.createElement('h4');
  title.textContent = object.title;
  title.appendChild(mainCol);
  const pRow = document.createElement('div');
  pRow.setAttribute('class','row');
  pRow.appendChild(mainCol);
  const pCol = document.createElement('div');
  pCol.setAttribute('class','col');
  pCol.appendChild(pRow);
  const entry = document.createElement('p');
  entry.textContent = object.entry;
  entry.appendChild(pCol);
  const buttonRow = document.createElement('div');
  buttonRow.setAttribute('class','row');
  buttonRow.appendChild(mainCol);
  const buttonCol = document.createElement('div');
  buttonCol.setAttribute('class','col d-flex justify-content-center align-items-center');
  buttonCol.appendChild(buttonRow);
  const viewbutton = document.createElement('button');
  viewbutton.setAttribute('class','btn btn-sm btn-primary button-width m-1');
  viewbutton.appendChild(buttonCol);
  const buttonImage = document.createElement('img');
  buttonImage.setAttribute('class','img-entry');
  buttonImage.setAttribute('src', object.buttonImage);
  buttonImage.setAttribute('class', object.buttonAlt);
  buttonImage.appendChild(viewbutton);
  return main;
}

// Loads Entries to Entry Page
function loadEntries() {
  let loadObj = user.entries;
  for(let i = 0; i < loadObj.length; i++) {
    let createEntry = createDom(loadObj[i]);
    $entryPosition.appendChild(createEntry);
  }
}



document.addEventListener('click',(e)=>{
  console.log('vaue of e.target',e.target);


  // This Saves the Journal Entry and Changes to Green Submit and Success Page
  if (e.target.id === 'entryBtnImg' || e.target.id === 'entrySubmitBtn') {
    e.preventDefault();
    const title = $entryForm.elements.title.value;
    const entry = $entryForm.elements.entry.value;
    const pushToEntries = {'title': title, 'entry': entry }
    user.entries.push(pushToEntries);
    changeView('successEntry');

  }


  if(e.target.dataset.view === 'addJournal') {
    changeView('addJournal')
  }
  if(e.target.dataset.view === 'viewJournal') {
    changeView('viewJournal')
  }



})
