// global variable
let isDiscountCodeApply = false;

// calculating the price
function calculateTotal() {
	const mainPrice = parseInt(document.getElementById('main-price').innerText);
	const memoryPrice = parseInt(
		document.getElementById('memory-total-price').innerText
	);
	const storagePrice = parseInt(
		document.getElementById('storage-total-price').innerText
	);
	const deliveryPrice = parseInt(
		document.getElementById('delivery-price').innerText
	);
	const totalPrice = document.getElementById('total-price');
	const discountPrice = document.getElementById('final-price');

	const calTotal = mainPrice + memoryPrice + storagePrice + deliveryPrice;

	totalPrice.innerText = calTotal;
	discountPrice.innerText = calTotal;
}

// calculate discount
function calculateDiscount(discount) {
	const promoField = document.getElementById('promo-input');
	if (promoField.value === 'stevekaku' && !isDiscountCodeApply) {
		const totalPrice = document.getElementById('final-price');
		const totalPriceNumber = parseInt(totalPrice.innerText);
		const discountPrice = (totalPriceNumber / 100) * discount;
		const finalTotalPrice = totalPriceNumber - discountPrice;

		totalPrice.innerText = finalTotalPrice;
		promoField.value = '';
		isDiscountCodeApply = true;
	} else {
		alert('Promo code ' + promoField.value + 'invalid or already applied');
		promoField.value = '';
	}
}

// common btn handler
function btnHandler(btnId, priceId, price) {
	document.getElementById(btnId).addEventListener('click', function () {
		document.getElementById(priceId).innerText = price;
		calculateTotal();
	});
}

// final price after discount
document.getElementById('apply-btn').addEventListener('click', function () {
	calculateDiscount(20);
});

// calling btn handler for different values
btnHandler('memory-8gb', 'memory-total-price', 0);
btnHandler('memory-16gb', 'memory-total-price', 180);
btnHandler('storage-256gb', 'storage-total-price', 0);
btnHandler('storage-512gb', 'storage-total-price', 100);
btnHandler('storage-1tb', 'storage-total-price', 180);
btnHandler('free-delivery', 'delivery-price', 0);
btnHandler('express-delivery', 'delivery-price', 20);
