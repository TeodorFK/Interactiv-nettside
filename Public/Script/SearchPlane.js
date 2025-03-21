//Cart//
function addToCart(flight) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push(flight);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('Flight added to cart!');
}

document.addEventListener('DOMContentLoaded', function() {
    const flightCards = document.querySelectorAll('.flight');
    
    flightCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const from = this.querySelector('h3:nth-child(1)').textContent.replace('From - ', '');
            const to = this.querySelector('h3:nth-child(2)').textContent.replace('To - ', '');
            const price = parseInt(this.querySelector('.price').textContent.replace('kr', ''));
            const time = this.querySelector('.time').textContent;
            const date = this.querySelector('.date').textContent;
            
            const flight = {
                from: from,
                to: to,
                price: price,
                time: time,
                date: date
            };
            
            addToCart(flight);
        });
    });
});
