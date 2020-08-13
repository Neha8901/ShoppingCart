//console.log("Hello");

const removeCartItemsButtons = document.getElementsByClassName("btn-danger");
const cartItemsContainer = document.getElementsByClassName("cart-items")[0];
const cartRows = cartItemsContainer.getElementsByClassName("cart-row");
const cartTotalPrice = document.getElementsByClassName("cart-total")[0].getElementsByClassName("cart-total-price")[0];

for (let i = 0; i < removeCartItemsButtons.length; i++) {
    removeCartItemsButtons[i].addEventListener('click', removeCartItem );
}

function removeCartItem(e) {
    let btn = e.target;
    let itemRow = btn.parentElement.parentElement;
    //let parent = itemRow.parentNode;

    itemRow.remove();
    //parent.removeChild(itemRow);
    updateCartTotal();
}

function updateCartTotal() {
    var itemPrice, quantity, total = 0;

    for (let i = 0; i < cartRows.length; i++) {

        itemPrice = parseFloat(cartRows[i].getElementsByClassName("cart-price")[0].innerText.replace('$', ''));
        quantity = cartRows[i].getElementsByClassName("cart-quantity-input")[0].value;

        total += itemPrice * quantity;

        //console.log(itemPrice, quantity);
    }

    //console.log("$"+total);
    cartTotalPrice.innerText = "$"+total;
}

updateCartTotal();