let itemList = document.querySelector('ul.todo');
let newItemField = document.querySelector('.new-item');
let addItemBtn = document.querySelector('.add-item');


addItemBtn.addEventListener('click', function () {
	let newItemLI = document.createElement('li')
	newItemLI.textContent = newItemField.value
	newItemField.value = ''
	itemList.appendChild(newItemLI)

	updateItemCounts()
})

let updateItemCounts = function () {
	let allItems = document.querySelectorAll('ul.todo li');
	let totalSpan = document.querySelector('.stats .total')
	totalSpan.innerText = allItems.length;
}
updateItemCounts()



let clearButton = document.querySelector('button.clear-finished')
clearButton.onclick = function () {
	let finishedItems = document.querySelectorAll('ul.todo li.finished');
	finishedItems.forEach(function (finishedItem) {
		finishedItem.remove()
	})

	updateItemCounts()
}