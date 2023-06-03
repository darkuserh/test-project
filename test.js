document.querySelector('.btn-additems').addEventListener('click', myButton);
document.querySelector('.btn-deleteitems').addEventListener('click', myDelete);
document.querySelector('.btn-sortitems').addEventListener('click', mySort);
document.querySelector('.btn-showxml').addEventListener('click', showXML);
document.querySelector('.btn-sortvalues').addEventListener('click', sortValues);
let items = []; 
let values = [];
function myButton() {
    let handleclick = document.querySelector('.f-input').value;
    let cleanedTextArea = handleclick.replace(/[#$@%^&*!]/g, '');
  items.push({ name: cleanedTextArea }); 
  let textarea = document.querySelector('.text-control');
  textarea.value += cleanedTextArea + '\n';
}

function myDelete() {
    let textarea = document.querySelector('.text-control');
    let lines = textarea.value.split('\n');
    lines.pop(); 
    textarea.value = lines.join('\n');
    values.pop(); 
  }

function mySort(event) {
  event.preventDefault(); 

  items.sort(function(a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1; 
    }
    if (nameA > nameB) {
      return 1; 
    }
    return 0; 
  });

  let textarea = document.querySelector('.text-control');
  textarea.value = '';

  for (let i = 0; i < items.length; i++) {
    textarea.value += items[i].name + '\n'; 
  }
}
function showXML(xmlString) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    let rootElement = xmlDoc.documentElement;
    let container = document.createElement('div');
    let xmlStringAsHTML = new XMLSerializer().serializeToString(rootElement);
    container.innerHTML = xmlStringAsHTML;

    document.body.appendChild(container);
  }
  function sortValues() {
    let sortedValues = values.slice().sort(); 
  
    let sortedText = sortedValues.join('\n'); 
    let textarea = document.querySelector('.text-control');
    textarea.value = sortedText; 
  }