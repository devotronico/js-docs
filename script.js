// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
 //console.log(document.images); // ottiene tutte gli elementi immagine
 //console.log(document.images[0].attributes); // ottiene tutte gli attributi di un elemento immagine es.{class, src, alt}
 //console.log(document.images[0].src); // ottiene l' attributo src di un elemento immagine
 //console.log(document.images[0].className); // ottiene il nome della classe di un elemento
 //console.log(document.images[0].id); // ottiene il nome dell' id di un elemento
 //console.log(document.images[0].classList); // ottiene l' attributo src di un elemento immagine

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }


//  EVENTI link:  https://developer.mozilla.org/en-US/docs/Web/Events

//  EVENTI MOUSE

var blockGreen = document.querySelector('#block-green');


blockGreen.addEventListener('click', click);
       
function click(e) { console.dir(e.target); }



//----------------------------------------------------------------------------
//  EVENTI Drag & Drop

//var blockBlue = document.querySelector('#block-blue'); // in html bisogna attivare l'attributo draggable='true' dell'elemento che vogliamo trascinare
//var blockRed = document.querySelector('#block-red');

//blockBlue.addEventListener('drag', drag);           // rileva il drag dell'elemento (evento continuo)
//blockBlue.addEventListener('dragstart', dragstart); // rileva l'inizio del drag dell'elemento (evento non continuo)
//blockBlue.addEventListener('dragend', dragend);     // rileva la fine del drag dell'elemento (evento non continuo)

//blockRed.addEventListener('dragover', dragover);    // rileva se si sta draggando sopra di esso (evento continuo)
//blockRed.addEventListener('dragenter', dragenter);  // rileva l'entrata del drag sopra di esso (evento non continuo)
//blockRed.addEventListener('dragleave', dragleave);  // rileva l'uscita del drag sopra di esso (evento non continuo)
//blockRed.addEventListener('drop', drop);            // rileva il rilascio di un altro elemento su di esso (evento non continuo). Per funzionare attivare anche l'evento dragover 

//function drag() { console.dir('drag'); }
// function dragstart() { console.dir('dragstart'); }
// function dragend()   { console.dir('dragend'); }
// function dragover(e) { e.preventDefault(); console.dir('dragover'); } // fare il preventDefault di questo evento(dragover) per attivare l'evento drop 
// function dragenter() { console.dir('dragenter'); }
// function dragleave() { console.dir('dragleave'); }
// function drop()        { console.dir('drop'); }





//----------------------------------------------------------------------------
// selezionare un inseme di elementi e aggiungere a ognuno di essi un evento
/*
var blocks = document.querySelectorAll('.block');

for ( const block of blocks ) { block.addEventListener('click', clickfunc); }

function clickfunc(e) { console.dir(e.target);}
*/