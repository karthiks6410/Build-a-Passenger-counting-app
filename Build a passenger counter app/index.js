// (initial code)
//document.getElementById("count-el").innerText = 5

let count = 0
let saveEl = document.getElementById("saveEl")
let countEl = document.getElementById("count-el")
function increment() {
	count = count + 1
	countEl.innerText = count
	console.log("count")
}
function save() {
	let countStr = count + " - "
	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}


