













// Create DOM Function

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
