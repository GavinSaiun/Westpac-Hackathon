const cartButton = document.getElementById('cart-button');
const addButtons = document.querySelectorAll('.add-button');
const minusButtons = document.querySelectorAll('.minus-button');
const itemPrices = document.querySelectorAll('.item-price');
const itemQuantities = document.querySelectorAll('.item-quantity');
updateCartButton();
addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let quantity = parseInt(itemQuantities[index].textContent);
        itemQuantities[index].textContent = quantity + 1;
        updateCartButton();
    });
});

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let quantity = parseInt(itemQuantities[index].textContent);
        if (quantity > 0) {
            itemQuantities[index].textContent = quantity - 1;
            updateCartButton();
        }
    });
});

function updateCartButton() {
    let total = 0;
    itemPrices.forEach((priceElement, index) => {
        let price = parseFloat(priceElement.textContent.replace('$', ''));
        let quantity = parseInt(itemQuantities[index].textContent);
        total += price * quantity;
    });
    cartButton.textContent = `Pay $${total.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.transition-link');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = 0;
  
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  });