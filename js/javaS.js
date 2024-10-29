let cartShopping = document.getElementById("cart-shopping");
let cardImg = document.querySelectorAll(".card-img-top");
let cardTitle = document.querySelectorAll(".card-title");
let cardText = document.querySelectorAll(".card-text");
let items = document.querySelector(".items");
let index;
let dataProduct;
if (localStorage.item != null) {
  dataProduct = JSON.parse(localStorage.item);
} else {
  dataProduct = [];
}
function addItem(node) {
  let obj = {
    cardImg: cardImg[node].src,
    cardTitle: cardTitle[node].innerHTML,
    cardText: cardText[node].innerHTML,
  };
  dataProduct.unshift(obj);
  localStorage.setItem("item", JSON.stringify(dataProduct));
  index = node;
  showData();
}
function showData() {
  let table = "";
  for (let i = 0; i < dataProduct.length; i++) {
    table += `
       <div class="item row" >
          <div class="col-4"><img src="${dataProduct[i].cardImg}" alt="" /></div>
          <div class="col-5 text-center">
            <h3>${dataProduct[i].cardTitle}</h3>
            <p>${dataProduct[i].cardText}</p>
          </div>
          <div class="col-3 text-center"><i class="fa-solid fa-trash" id="remove" onclick="deleteItem(${i})"></i></div>
          <br>
        </div>
       `;
  }
  items.innerHTML = table;
  let total = 0;
  for (let i = 0; i < dataProduct.length; i++) {
    total += parseInt(dataProduct[i].cardText);
  }
  document.getElementById("Total").innerHTML = total;
}
showData();
function deleteItem(i) {
  dataProduct.splice(i, 1);
  localStorage.item = JSON.stringify(dataProduct);
  showData();
}
function deleteAll() {
  localStorage.clear();
  dataProduct = [];
  showData();
}
function buy() {
  window.alert("Are You Sure to buy it");
}
