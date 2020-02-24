let itemList = document.querySelector('ul.todo');
let newItemField = document.querySelector('.new-item');
let addItemBtn = document.querySelector('.add-item');

let makeNewItem = function (name) {
	let newItemLI = document.createElement('li')
	newItemLI.textContent = name

	let completeButton = document.createElement('button')
	completeButton.innerText = '😐'

	newItemLI.appendChild(completeButton)

	newItemField.value = ''
	itemList.appendChild(newItemLI)

	updateItemCounts()

	completeButton.addEventListener('click', function () {
		newItemLI.classList.toggle('finished')
		if (newItemLI.classList.contains('finished')) {
			completeButton.innerText = '😀'
		} else {
			completeButton.innerText = '😐'
		}
		updateItemCounts()
	})
}



let updateItemCounts = function () {
	let allItems = document.querySelectorAll('ul.todo li:not(.finished)');
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



addItemBtn.addEventListener('click', function () {
	makeNewItem(newItemField.value)
})


makeNewItem('Do homework')
makeNewItem('Self care')
makeNewItem('Sleep')