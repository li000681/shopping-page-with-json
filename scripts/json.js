// get data from json file, produce shopping grid, and summary 
const div = document.querySelector("#items");
const total = document.querySelector("#total");
const summary = document.querySelector("#summary");
// get item information from data.json file
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function(){
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      let cards = httpRequest.response;
      cards = JSON.parse(cards);
      showCards(cards);
    }
    else {
    console.log(httpRequest.readyState);
    console.log(httpRequest.status);
    }
  }
}
httpRequest.open('get','data.json');
httpRequest.send();

//the items information, like image, name, value, press item image, the amount increase and subtotal change.
function showCards(obj) {
  for(let i = 0; i < obj.length; i++) {
    const itemImage = document.createElement('div');
    const image = document.createElement('img');
    const itemValue = document.createElement('div');
    const itemAmount = document.createElement('div');
    const amount = document.createElement('input');
    const itemSubtotal = document.createElement('div');
    const subtotal = document.createElement('input');
    const itemName = document.createElement('p');

    image.src = obj[i].image ;
    itemName.textContent = obj[i].name;
    itemValue.textContent = obj[i].value;
    amount.type = 'number';
    amount.value = 0;
    subtotal.type = 'number';
    subtotal.value = 0;
// add listener here because it doesn't work in event.js file.  querySelector() doesn't return any elements created by app.
    image.addEventListener('click',function(){
      amount.value= parseFloat(amount.value)+1;
      subtotal.value = parseFloat(itemValue.textContent) * parseFloat(amount.value);
      total.value = parseFloat(total.value) + parseFloat(itemValue.textContent);
    })

    itemImage.appendChild(image);
    itemImage.appendChild(itemName);
    itemAmount.appendChild(amount);
    itemSubtotal.appendChild(subtotal);
    div.appendChild(itemImage);
    div.appendChild(itemValue);
    div.appendChild(itemAmount);
    div.appendChild(itemSubtotal);
    itemImage.className = "itemImage";
    itemValue.className = "itemValue";
    itemAmount.className = "itemAmount";
    itemSubtotal.className = "itemSubtotal";
    itemImage.id = "img" + (i+1);
    itemAmount.id = "amount"+ (i+1);
    itemSubtotal.id = "subtotal"+ (i+1);
  }
}

//get data from shopping grid, create shopped items array with item object(name, amount)
function itemArray(){
  let itemArray=[];
  const items = document.querySelectorAll('.itemAmount');
  for(let i=0; i<items.length; i++){
    if (items[i].firstElementChild.value != 0){
      let value = items[i].firstElementChild.value;
      let divPre = items[i].previousElementSibling;
      let divPrePre = divPre.previousElementSibling;
      let pName = divPrePre.lastElementChild;      
      itemArray.push(new item(pName.textContent, value));
    }
  }
  return itemArray;
}

// create shopping summary, includeing person name, address, the shopped items' name, ammount.
function createSummary(obj){
  const userInfo = document.createElement("h2");
  const ul = document.createElement("ul");
  const liName = document.createElement("li");
  const liAddress = document.createElement("li");

  userInfo.textContent = 'User info:';

  ul.id = 'userInfo'
  liName.textContent = 'Name: ' + document.querySelector("input[name='name']").value;
  liAddress.textContent = 'Address: ' + document.querySelector("input[name='address']").value;
  ul.appendChild(liName);
  ul.appendChild(liAddress);
  summary.appendChild(userInfo);
  summary.appendChild(ul);

  const itemInfo = document.createElement("h2");
  const ol = document.createElement("ol");

  itemInfo.textContent = 'You picked the following items:';
  ol.id = 'itemInfo';
  for(let i=0; i<obj.length; i++){
    const liItem = document.createElement("li");
    liItem.textContent = (i+1) + ')     ' + obj[i].amount + ' ' + obj[i].name;
    ol.appendChild(liItem);
  }
  summary.appendChild(itemInfo);
  summary.appendChild(ol);
}