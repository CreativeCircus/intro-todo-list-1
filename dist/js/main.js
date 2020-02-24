"use strict";

var itemList = document.querySelector('ul.todo');
var newItemField = document.querySelector('.new-item');
var addItemBtn = document.querySelector('.add-item');

var makeNewItem = function makeNewItem(name) {
  var newItemLI = document.createElement('li');
  newItemLI.textContent = name;
  var completeButton = document.createElement('button');
  completeButton.innerText = '😐';
  newItemLI.appendChild(completeButton);
  newItemField.value = '';
  itemList.appendChild(newItemLI);
  updateItemCounts();
  completeButton.addEventListener('click', function () {
    newItemLI.classList.toggle('finished');

    if (newItemLI.classList.contains('finished')) {
      completeButton.innerText = '😀';
    } else {
      completeButton.innerText = '😐';
    }

    updateItemCounts();
  });
};

var updateItemCounts = function updateItemCounts() {
  var allItems = document.querySelectorAll('ul.todo li:not(.finished)');
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

addItemBtn.addEventListener('click', function () {
  makeNewItem(newItemField.value);
});
makeNewItem('Do homework');
makeNewItem('Self care');
makeNewItem('Sleep');
//# sourceMappingURL=main.js.map
