document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const cartSummary = document.querySelector('.cart-summary');
    
    const cartItems = cartSummary.querySelectorAll('.cart-item');
    cartItems.forEach(item => item.remove());
    
    let total = 0;
    
    cart.forEach(flight => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${flight.from} → ${flight.to}</p>
            <p>${flight.price}kr</p>
        `;
        cartSummary.insertBefore(cartItem, cartSummary.querySelector('.cart-item:last-child'));
        total += flight.price;
    });
    
    const totalItem = document.createElement('div');
    totalItem.className = 'cart-item';
    totalItem.innerHTML = `
        <p><strong>Total</strong></p>
        <p><strong>${total}kr</strong></p>
    `;
    cartSummary.appendChild(totalItem);
});
