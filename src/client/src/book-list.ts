
function renderBook(bookData: Book): HTMLElement {
	const div = document.createElement('div');
	let str = `<p> Title: ${bookData.name} </p>`;
	str += `<p> ISBN: ${bookData.isbn}</p>`;

	div.innerHTML = str;

	return div;
}

async function test_function(){
	const res = await apiGetRequest('v1/books');
	console.log(res);

	const element = document.getElementById("content");
	if (element != null){
		element.appendChild(renderBook(JSON.parse(res)[0] as Book));
	}
}

window.onload = test_function;
