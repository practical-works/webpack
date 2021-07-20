export default function createDiv(id) {
	let div = document.createElement("div");
	div.id = id;
	document.body.appendChild(div);
}