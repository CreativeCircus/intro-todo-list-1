"use strict";

var itemList = document.querySelector('ul.todo');
var newItemField = document.querySelector('.new-item');
var addItemBtn = document.querySelector('.add-item');
addItemBtn.addEventListener('click', function () {
  var newItemLI = document.createElement('li');
  newItemLI.textContent = newItemField.value;
  newItemField.value = '';
  itemList.appendChild(newItemLI);
  updateItemCounts();
});

var updateItemCounts = function updateItemCounts() {
  var allItems = document.querySelectorAll('ul.todo li');
  var totalSpan = document.querySelector('.stats .total');
  totalSpan.innerText = allItems.length;
};

updateItemCounts();
var clearButton = document.querySelector('button.clear-finished');

clearButton.onclick = function () {
  var finishedItems = document.querySelectorAll('ul.todo li.finished');
  finishedItems.forEach(function (finishedItem) {
    finishedItem.remove();
  });
  updateItemCounts();
};
//# sourceMappingURL=main.js.map
