let currentAmount = "";

function updateAmount(value) {
    currentAmount += value;
    displayAmount();
}

function clearAmount() {
    currentAmount = "";
    displayAmount();
}

function displayAmount() {
    const amountElement = document.getElementById("amount");
    if (currentAmount === "") {
        amountElement.textContent = "$0.00";
    } else {
        amountElement.textContent = "$" + (parseInt(currentAmount) / 100).toFixed(2);
    }
}

function submitAmount() {
    alert("Amount submitted: " + document.getElementById("amount").textContent);
}
let cartCount = 0;

const cartButton = document.getElementById('cart-button');
const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartButton();
    });
});

function updateCartButton() {
    cartButton.textContent = `Cart (${cartCount} ${cartCount === 1 ? 'item' : 'items'})`;
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