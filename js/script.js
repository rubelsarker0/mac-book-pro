// common btn handler
function btnHandler(btnId, priceId, price) {
	document.getElementById(btnId).addEventListener('click', function () {
		document.getElementById(priceId).innerText = price;
		calculateTotal();
	});
}
